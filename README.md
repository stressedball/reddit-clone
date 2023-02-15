# Build a social app. Basing project on site Reddit.
This is the 3rd iteration after 2 first started projects where I got to the same point :
- having to manage state and rerender components upon changes made to database.
- messed up queries to Firebase and reads made skyrocketed (I'm sure I have some useEffect or other
    part of my code not being controlled but couldn't find it)

# Use React for building components and client-side routing.

# Use Firebase as BaaS.

# Make use of React 'createContext' to pass user information and bulk data to components tree.
Using a context for authentication : let app set a 'sign in' page or the 'home' page based on the authentication status.
Using a 'General' context : fetches the rest of the data to pass it.
Using a User context : fetches the user details.

# Structure
'Sign in' or 'Home'
'Home' => 
    'Header', 
    'Create Post' shortcut, 
    'Content'.
'Header' => 
    Logo that takes to 'About', 
    navigation dropdown to subs and users, 
    search bar, 
    user drop down menu
'Create Post' shortcut. => 
    Takes to 'submit' new post page
'Content' => 
    displays user subscribed to content.  

# changes of plans
Since I'm using the context to provide data for the components tree, I'm running into issues since a change in the firebase database isn't rerendered in nested components.
I thought about fetching the data everytime the components mounts to make sure all the data is reflecting the state of firebase.
But the number of requests simply skyrocket when I have very few number of items. Plus it doesn't make a lot of sense to fetch the whole data just for a change.

Studying cache and pagination and whatnots to make this better.

# This is going out of hands. And I don't think I know why.
I'm developing this app with great consideration to queries to Firebase.
It seems that the more I'm careful the worse it gets.
In the past week, the number of reads in Firestore barely went above 30 reads / day.
Today, while being more cautious, I'm getting 35k reads / day. 
WHAT!

# Redoing the whole data fetching by using react-query-firebase library
Hoping I'll be able to get the app to refresh, fetch data when needed.
That could lift totally the need to manage a global state and rerender components.