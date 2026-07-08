# Hooks To Improve Performance in React App

Performance, is the most important metric for any web app, especially if there is business depending upon it. The slightest increase/decrease in it affects the whole chain. From SEO to user experience to lead conversion and ultimately sales.

React is the most popular library out there to create a web app or mobile app, desktop app, PWA, etc.

Let us see 5 hooks that will help us to improve the performance of the apps that are built in React.

## useWhyDidYouUpdate() hook
Avoiding pointless re-renders is one way to accomplish performance optimization in React, and in order to track this, we must keep an eye on what has changed in the component's props or states.

Use the useWhyDidYouUpdate() hook to find out what changed and caused the re-rendering so that if they are unnecessary, they can be mitigated.

The idea is very simple, use a useRef() hook to store the previous props and then compare it with the current props to check what has triggered the re-render.

As states are part of the component itself and controlled by it, they can be tracked separately.
```js
function useWhyDidYouUpdate(name, props) {
  // create a reference to track the previous data
  const previousProps = useRef();

  useEffect(() => {
    if (previousProps.current) {
      // merge the keys of previous and current data
      const keys = Object.keys({ ...previousProps.current, ...props });

      // to store what has change
      const changesObj = {};

      // check what values have changed between the previous and current
      keys.forEach((key) => {
        // if both are object
        if (typeof props[key] === "object" && typeof previousProps.current[key] === "object") {
          if (JSON.stringify(previousProps.current[key]) !== JSON.stringify(props[key])) {
            // add to changesObj
            changesObj[key] = {
              from: previousProps.current[key],
              to: props[key],
            };
          }
        } else {
          // if both are non-object
          if (previousProps.current[key] !== props[key]) {
            // add to changesObj
            changesObj[key] = {
              from: previousProps.current[key],
              to: props[key],
            };
          }
        }
      });

      // if changesObj not empty, print the cause
      if (Object.keys(changesObj).length) {
        console.log("This is causing re-renders", name, changesObj);
      }
    }

    // update the previous props with the current
    previousProps.current = props;
  });
}
```

## useOnScreen() hook
Lazy loading can drastically boost the performance as we will be loading things as and when required rather than pulling everything in bulk.

For example, for a component that is not visible yet on the viewport, it makes no sense to load the media files like images, video, audio, or any large data.

Thus we can use the useOnScreen() hook to determine if the component is visible and is in the viewport then perform the necessary action.

We can use the [Intersection observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) to implement this. Create a reference to the component using useRef() hook and then observe this reference, if it is intersecting, update the state that it is visible.
```js
function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  // monitor the interaction
  const observer = new IntersectionObserver(
    ([entry]) => {
      // update the state on interaction change
      setIntersecting(entry.isIntersecting);
    }
  );

  useEffect(() => {
    // assign the observer
    observer.observe(ref.current);

    // remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
}
```

## useScript() hook
Removing the load from the main processing thread and lazy loading the scripts dynamically is an important way of boosting performance.

Keeping the initial script as small as possible results in faster processing. Thus all other unimportant scripts can be loaded separately as and when required.

For example, the Google Adsense script is not required to be part of the main bundle, it can be loaded separately using the useScript() hook.

useScript() hook loads any given script if it is not already loaded.

We use the src and traverse the DOM and check if it exists, if it is not then we can create a new script and inject it into the body.

Also, assign the load and error listener on the script to monitor if it is properly loaded or not. Depending upon the response from the listeners, update the status.
```js
function useScript(src) {
  // keep track of script status ("idle", "loading", "ready", "error")
  const [status, setStatus] = useState(src ? "loading" : "idle");

  useEffect(() => {
    // if not url provided, set the state to be idle
    if (!src) {
      setStatus("idle");
      return;
    }

    // get the script to check if it is already sourced or not
    let script = document.querySelector(`script[src="${src}"]`);

    if (!script) {
      // create script
      script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.setAttribute("data-status", "loading");
      // inject the script at the end of the body
      document.body.appendChild(script);

      // set the script status in a custom attribute
      const setAttributeFromEvent = (event) => {
        script.setAttribute("data-status", event.type === "load" ? "ready" : "error");
      };

      script.addEventListener("load", setAttributeFromEvent);
      script.addEventListener("error", setAttributeFromEvent);
    } else {
      // if the script is already loaded, get its status and update.
      setStatus(script.getAttribute("data-status"));
    }

    // update the script status
    const setStateFromEvent = (event) => {
      setStatus(event.type === "load" ? "ready" : "error");
    };

    // setup
    script.addEventListener("load", setStateFromEvent);
    script.addEventListener("error", setStateFromEvent);

    // clean up
    return () => {
      if (script) {
        script.removeEventListener("load", setStateFromEvent);
        script.removeEventListener("error", setStateFromEvent);
      }
    };
  }, [src]);

  return status;
}
```

## useIdle() hook
If a user is Idle or not performing any type of activity then we can stop certain actions like API calls or perform session management and log out the user from the application, especially in the banking apps.

If a user is not using interaction hardware, such as a mouse, keyboard, or touch screen on a desktop, laptop, or mobile device, then that user is said to be inactive or idle.

We can listen to events like mousemove, mousedown, keypress, DOMMouseScroll, mousewheel, touchmove, and MSPointerMove for this.

Additionally, we must deal with edge circumstances where the window or tab is out of focus, therefore we will listen for focus and blur events in these situations.

If any of these events occur, set the user to be active; otherwise, if none have occurred for a predetermined period of time, set the user to be idle or inactive.

useIdle() hook takes time as input and will notify if the user has not performed any activity for that given amount of time.
```js
const useIdle = (delay) => {
  const [isIdle, setIsIdle] = useState(false);

  // create a new reference to track timer
  const timeoutId = useRef();

  // assign and remove the listeners
  useEffect(() => {
    setup();

    return () => {
      cleanUp();
    };
  });

  const startTimer = () => {
    // wait till delay time before calling goInactive
    timeoutId.current = setTimeout(goInactive, delay);
  };

  const resetTimer = () => {
    //reset the timer and make user active
    clearTimeout(timeoutId.current);
    goActive();
  };

  const goInactive = () => {
    setIsIdle(true);
  };

  const goActive = () => {
    setIsIdle(false);

    // start the timer to track Inactiveness
    startTimer();
  };

  const setup = () => {
    document.addEventListener("mousemove", resetTimer, false);
    document.addEventListener("mousedown", resetTimer, false);
    document.addEventListener("keypress", resetTimer, false);
    document.addEventListener("DOMMouseScroll", resetTimer, false);
    document.addEventListener("mousewheel", resetTimer, false);
    document.addEventListener("touchmove", resetTimer, false);
    document.addEventListener("MSPointerMove", resetTimer, false);

    //edge case
    //if tab is changed or is out of focus
    window.addEventListener("blur", startTimer, false);
    window.addEventListener("focus", resetTimer, false);
  };

  const cleanUp = () => {
    document.removeEventListener("mousemove", resetTimer);
    document.removeEventListener("mousedown", resetTimer);
    document.removeEventListener("keypress", resetTimer);
    document.removeEventListener("DOMMouseScroll", resetTimer);
    document.removeEventListener("mousewheel", resetTimer);
    document.removeEventListener("touchmove", resetTimer);
    document.removeEventListener("MSPointerMove", resetTimer);

    //edge case
    //if tab is changed or is out of focus
    window.removeEventListener("blur", startTimer);
    window.removeEventListener("focus", resetTimer);

    // memory leak
    clearTimeout(timeoutId.current);
  };

  // return previous value (happens before update in useEffect above)
  return isIdle;
};
```

## useResponsive() hook
DOM parsing and painting is a very expensive operation and should be avoided as much as possible for faster loading of application.

Generating the DOM and hiding it with the CSS for different screen sizes is still costly, rather than using CSS with React you can dynamically render the components.

Using useResponsive() hook we can determine the device screen size and accordingly render the components.For this, we are listening to the window resize event using a debounce call and updating the state if the size changes.
```js
const useResponsive = () => {
  // screen resolutions
  const [state, setState] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    // update the state on the initial load
    onResizeHandler();

    // assign the event
    Setup();

    return () => {
      // remove the event
      Cleanup();
    };
  }, []);

  // update the state on window resize
  const onResizeHandler = () => {
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth <= 990;
    const isDesktop = window.innerWidth > 990;

    setState({ isMobile, isTablet, isDesktop });
  };

  // debounce the resize call
  const debouncedCall = useDebounce(onResizeHandler, 500);

  // add event listener
  const Setup = () => {
    window.addEventListener("resize", debouncedCall, false);
  };

  // remove the listener
  const Cleanup = () => {
    window.removeEventListener("resize", debouncedCall, false);
  };

  return state;
};
```