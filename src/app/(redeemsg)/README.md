# Note the special syntax of @

- we are trying to parallel load to 2 slots (aka children)
- this is because just nice the UI format is

```
<hero/>
<fixed/>
<children/>
```

Thus, in order to render them nicely with path, the technique of using parallel routes and slots is being used. Read more about it (here)[https://nextjs.org/docs/app/building-your-application/routing/parallel-routes]
