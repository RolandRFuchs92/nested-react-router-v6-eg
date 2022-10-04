# React Router v6 nested routing example

> There are 2 main parts to this example.
> First part explains a basic implementation of how state driven routing is done. I would'nt err away from this even though its something I've done in the past. It can be convenient but becomes unwieldy as the page starts to grow, additionally trying to trouble shoot issues becomes more hidden with state driven stuff as a user is unable to provide a url to spawn a given page.

> Second part explains how to use React-Router-v6's `<Outlet />` syntax, and shows how you can have nested routes, without having to manually manage state or manage component rendering based on an object or state set objects. This is a preferred method as it comes with various features that a developer can opt in or out of, as well as the several other benefits, such as the potential controlling access to parts of an app based on route, or lazy loading and only changing parts of a page and not causing bigger page rerenders.

More explanations to follow.