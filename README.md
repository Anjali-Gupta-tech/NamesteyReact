# NamesteyReact

# Parcel
* Parcel bundling our file and make the app production ready.
*Automatical realoading.

# UI structure
/* 
  Header
  logo
  Nav items
  Body
  searchbar 
  Restorent item
  restorent card

  Footer
  copyright
  Addres contact
   links

  */
  # Two way to import/export
  1.default import/export
    export default component
    import component from "path"

2.Named import/export
 export const component
 import {component} from " path"
 # hooks
 these are normal javascript utility function.
 # Two important js hooks
 1.useState()
 2 useffect()
 # const[searchText]=useState("");
 input value={searchText} ; so here when we write something in searchbox
 it will not change (or write something) why? Because the we bind the value of input text in {searchText} => and [searchtext ] is empty.

 # Outlet
 If my page is /Contact than go to <Contact/>
 If my page is /About then go to <About/>

 # Type of Routimg
 # 1.client side routing
 All component are already loads we doesn't fetching any page from network
 rather than Api
 # single page application - 
 --Which only reder the page component 
 # 2.Server side Routing 
 
 # what is ComponentDidMount and why?
 ----ComponentDidMount is use to make an API calls.
 Load-->render-->Api calls-->re-render
 because react concillision cycle run like this
 And thats why we use componentDidMount for api call bcz it called
 After the constructora and render.

 # Mounting cycle
 --constructor(Dummy data)
 --render(dummy data)
 <html uodate(dummy data)>
 then ComponentdidMount
 <api call>
 --setState()

 # Updating cycle
 --setState(api call)
 --render
 <html> new api data
 componentdidUpdate call 

 # lazy loading/Ondemand loading
 It means everythings not loading a once it loads whenever required

