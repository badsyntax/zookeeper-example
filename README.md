## Overview

This example project will build a zookeeper and node service. The node service will consume data from the zookeeper service.

#£ Getting started

Start the services:

```
make start
```

Now run the `consume.js` example:

```
make consume
```

This will run the `consume.js` script in the context of the node service.
