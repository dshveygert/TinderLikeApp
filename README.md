# TinderLikeApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

Used node.js v.14.17 

Deployed on [http://api.shveygert.de:34207](http://api.shveygert.de:34207/)

## Assignment

```
Needs to implement a fully tested and production ready prototype of a Tinder-like application.
The Okay button leads a user “swiping” further.
Needs only the like-dislike part of the app -- registration, profiles, etc must be skipped.
The client-backend communication contract must be provided by you in a readme file. Please provide the backend specification(REST API or what you prefer).
Angular material must be used.
Errors and borderline cases must be taken into account, at least the case the person profiles are run out.
The test assignment must be production ready - no code changes needed to run it on different stages/environments.
Unit tests must be provided, coverage 100% overall.
```

## Solution

There are two pages: *Catalog* and *Profile*.

In **Catalog** User is offered a list of people who match his/her preferences. User can Like or Dislike person. If the likes are matched, the person is marked with "You got match!" and photo marked with blue border. The Database includes only 30 randomly generated persons.

The button "Okay" provide to the next person.

In **Profile** User can change preferences. "Match accuracy" input allows you to adjust the value of the match in percent. The matching is calculated by the age and gender fields. 

When you update the preferences, all the history of likes/dislikes/matches is deleted.

## API

Endpoints:

**GET /profile/preferences** - User`s preferences
```
{
  gender: 'male' | 'female' | 'not_specified';
  age: number;
  height: number;
  weight: number;
  match_accuracy: number;
}
```

**POST /profile/preferences** - Save User`s preferences
```
{
  gender: 'male' | 'female' | 'not_specified';
  age: number;
  height: number;
  weight: number;
  match_accuracy: number;
}
```

**GET /catalog/persons** - List of people
```
{
  id: number;
  name: string;
  age: number;
  height: number;
  weight: number;
  gender: 'male' | 'female' | 'not_specified';
  photo: string;
  status?: {
    matched: boolean;
    liked: boolean;
    disliked: boolean;
  }
}
```

**POST /catalog/feedback/{'like' | 'dislike'}** - Save like/dislike for person
```
{
  id: number;
}
```

Headers: 

To identify the user, the parameter *TinderUserUUID* is used in the HTTP headers.

When you first enter the site, a UUID is created and stored in the local storage. All subsequent requests to the server are signed with this UUID.


##
### Disclaimer
*All of the people featured on the site are made up at random, the characteristics of each person are chosen at random. All match marks are offered at random. Photos are taken from public sources and are in no way associated with the profiles of people on the site.*
