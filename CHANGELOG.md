# Change Log

All notable changes to this project will be documented in this file.

<!-- New entries go after this line -->

## v1.0 - 2024-05-09

The Lounge finally gains the ability to automatically clean up sqlite databases.
Note that cleaning existing, large databases can take a significant amount of time
and running a database `VACUUM` will use up ~2x the current DB disc space for a short period.

If you enable the storagePolicy, stop the running instance and run `thelounge storage clean`.
This will force a full cleanup once, rather than doing so incrementally and will release all the
disc space back to the OS.

As usual, we follow the Node.js release schedule, so the minimum Node.js version required is now 18.

Many thanks to all the contributors to this release, be that documentation, code or maintaining the packages.  
Your help is greatly appreciated!
