# Express.js JSON Body Parsing Issue

This repository demonstrates a common issue encountered when working with JSON request bodies in Express.js applications.

## Problem

The provided Express.js code snippet attempts to parse a JSON request body using `express.json()`. However, the `req.body` object remains empty despite the middleware being correctly set up.

## Solution

The solution involves checking the order of middleware functions. The `express.json()` middleware must be placed *before* any route handlers that expect a JSON body.  Additionally, ensuring the content-type header is correctly set in the request is crucial for proper parsing.