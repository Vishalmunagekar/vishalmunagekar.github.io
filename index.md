Count-API
=========

##### This will make your counting easy!

CountAPI
--------

This API allows you to create simple numeric counters.  
It goes down to:

*   Create a counter and restrict its operations
*   Reset the value of a counter
*   Increment/decrement a counter

All counters are accesible if you know the key and there are not private counters (yet?).  
Want to track the number of hits a page had? -> Sure.  
Want to know the number of users that clicked on the button "Feed Cow"? -> There you go.

All API URLs
------------

##### Create

[http://localhost:8080/count/create?username=something\_unique](http://localhost:8080/count/create?username=something_unique)
⇒ 200 { "key": "cf3694bf-7cbb-4979-98f3-0e3fadaf8c77", "value": 0, "error": null, "warning": null }

##### Get

[http://localhost:8080/count/get?key=cf3694bf-7cbb-4979-98f3-0e3fadaf8c77](http://localhost:8080/count/get?key=cf3694bf-7cbb-4979-98f3-0e3fadaf8c77) (value was 53)
⇒ 200 { "key": "cf3694bf-7cbb-4979-98f3-0e3fadaf8c77", "value": 54, "error": null, "warning": null }

[http://localhost:8080/count/get?counter=10&key=b548d0b7-f89a-423e-bb91-16baf56257ab](http://localhost:8080/count/get?counter=10&key=b548d0b7-f89a-423e-bb91-16baf56257ab) (value was 54)
⇒ 200 { "key": "cf3694bf-7cbb-4979-98f3-0e3fadaf8c77", "value": 64, "error": null, "warning": null }

##### Reset

[http://localhost:8080/count/reset?key=cf3694bf-7cbb-4979-98f3-0e3fadaf8c77](http://localhost:8080/count/reset?key=cf3694bf-7cbb-4979-98f3-0e3fadaf8c77) (value was 64)
⇒ 200 { "key": "cf3694bf-7cbb-4979-98f3-0e3fadaf8c77", "value": 0, "error": null, "warning": null }

##### Forgot-key

[http://localhost:8080/count/forgot-key?username=your\_username](http://localhost:8080/count/forgot-key?username=your_username)
⇒ 200 { "key": "b548d0b7-f89a-423e-bb91-16baf56257ab", "value": 0, "error": null, "warning": null }

About API
---------

##### Username

Username are meant to avoid name collisions. You may specify a username during the creation of a key. Its recommend use the domain of the application as username to avoid collision with other websites. If the username is not specified the key is assigned to the default username. If your key resides in the default username you don't need to specify it.

##### Key

After providing a username, it generates a unique key which the user must use for every request. It is crucial for the user to safeguard this key, as without it, access to the associated counter created by the user will be impossible.

#### Create counter

Generates a new key for a new user and initializes their count to zero.

    @GetMapping("/create") 
    public ResponseEntity createCount(@RequestParam("username") String username) {
        return new ResponseEntity<>(counterService.generateKeyForNewUser(username), HttpStatus.CREATED);
    }

#### Get counter

Increases the count associated with the given key by the specified value.

    @GetMapping("/get")
    public ResponseEntity getCount(@RequestParam("key") String key, @RequestParam(value = "counter", defaultValue = "1") int counter) {
        return new ResponseEntity<>(counterService.increaseCount(key, BigInteger.valueOf(counter)), HttpStatus.OK);
    }

#### Reset counter

Resets the count associated with the given key to zero.

    @GetMapping("/reset")
    public ResponseEntity resetCount(@RequestParam("key") String key) {
        return new ResponseEntity<>(counterService.resetCount(key), HttpStatus.OK);
    }

#### Forgot key

Resets the key and count for an existing user.

    @GetMapping("/forgot-key")
    public ResponseEntity forgotKey(@RequestParam("username") String username) {
        return new ResponseEntity<>(counterService.forgotKeyForExistingUser(username), HttpStatus.CREATED);
    }