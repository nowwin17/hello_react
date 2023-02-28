/**
 * Npm init (it gives package.json(configuration of node packages))
 * npm i -D parcel (install parcel with dev-dependency -D )
 * Create script(package.json under script: we define commands to start and build project)
 * npx is used for execute package without installing it
 * npx = npm run
 * npm run start = npm start
 * 
 * 
 * *****************************parcel or any bundler**************************************
 * 
 * Primary Objective: It bundled our code in one js file
 * run project npx parcel <entrypoint<index.html>> which creates dev build, create server hmr
 * HMR: Hot module replacing(due to file watcher)
 * File Watcher Algorithms (parcels, its writtern in c++)
 * .parcel-cache take care minified, hmr, file watcher
 * dist folder keeps file minified
 * npx parcel index.html (it just created dev build and hosted on server )
 * make production build npx parcel build index.html
 * and make build in dist folder
 * It bundled code (cleaning and minified code)
 * It also minified ,compress media files
 * It also does caching , caching by development
 * It also take care of compatibility with old browser version(browserlist)
 * It also take care of pollyfills
 * It also provide functionality enable https in dev server
 * It also manages port no.
 * It has consistent hashing algorithm 
 * It is zero config bundler(just install parcel and it takes care of everything)
 * Transitive Dependencies(Nested dependencies (one dependency depends on another in nested))
 * Tree shaking: Removing unwanted code : e.g. if you use one library and it has 20 other helper library 
 * but you only used 2 or three of it then parcel or any bundler just ignores other very smartly
 * 
 * 
 * ************************Babel*************************************** 
 * 
 * Babel(its a node package or library): transpiler: takes code and spitting code 
 * Babel:If old browser doesn't support new feature like es6 then Babel comes in picture and 
 * convert new code to older code using pollyfil
 * Babel: Browser list "browserList":["last 2 versions" or "last 2 chrome versions"]
 * my app is  working last 2 versions all web browser
 * remove console.log(babel-pluging-transform-remove-console)
 * configure Babel(.bablerc)
 * Babels executes jsx : Babel convert JSX into React.createElement 
 * Babel comes along with parcel
 * Jsx is not work without babel
 * 
 * *************React Key*************
 * https://reactjs.org/docs/reconciliation.html
 * if your code doesnt have key that it re-render lot but if we put unique key then react need perform less effort 
 * 
 * *****************JSX**************
 * It is html like syntax but its not html
 * what is diff b/w html and jsx(camelcasing just like class in html but in jsx className)
 * how does js executes jsx (babel does for us)
 * JSX uses React.createElement with the help babel
 * Readability, lesscode, no-repeatation,developer freindly
 * Its not package its syntax 
 * Its sanitized data , like prevent xss attack
 * Any piece of jsx should only have one parent element
 * React.Fragment is component (It wraps multiple element without adding extra div element)
 * React.Fragment(its like a empty tag)so we can replace with <></>
 * 
 * *********************React Component******************
 * Functional Component - NEW 
 * Class Based COmponent - OLD
 * Name of Component start with Capital letter but its not mandatory
 * component composition:Component inside component is called component composition
 * 
 * 
 * *****************Virtual Dom************************
 * We keep representation dom with us is known as Virtual Dom
 * We need VD for Reconcaliation https://reactjs.org/docs/reconciliation.html
 * Reconcaliation has diff algorithm which uses by react to identify diff of trees VD and dom 
 * and updates only changes in dom
 * Whenever there is multiple children of same tag(div, li or any) then React will re-render everything 
 * if there any changeson those childrens
 * But if we use KEY which is unique and assign to each children then any changes then
 * it will update new changes(update,deletion,addition) not everything
 * React Fiber :its new reconcaliation engine which is introduce in React 16 and it has diff algo
 * React is fast beacuase fast dom maninpulation
 * - It will acheive by diff algo 
 * - It keeps two VD one is current and other previous state
 * - Its just compare both state  and re-render component and update value of state
 * 
 * *******************File Structure and Export component***************
 * Most commonly practice to make component folder define each individual component there
 * Export component
 *  - By default like export  Title; => Import : 
 *      Default import Title from (./components/<filename>) => import without {}
 *  - By name: export const Title = () =>(any piece of code) 
 *      Named Import : import {Title} from (./components/<filename>):import with {}
 *      We import like this import * as obj from (./components/<filename>): obj.Title
 * default
 * Never create component inside of component
 * Component
 * -Make your code modular,maintainable, readable, testable, reusable
 * 
 *  ************************Data Binding*********************
 * React has one way data binding e.g. input tag we need to bind something to modify input value
 *  -onChange= {(e)=>console.log(e.target.value)} is responsible on change value of input
 *      -by using this we will acheive two way binding change value and read value simultaneously
 * 
 * *****************************State******************************************
 * When you need local variable in react then you will need state to maintain it
 * So you will keep record of that variable 
 * Whenever we update those variable React will re-render(reconcaliation) whole component  
 * 
 * *****************************Hooks***************************
 *Hooks just a normal function
 *
 *useState: Use to create state variable e.g. const {searchText}=useState(""), => const searchText;
 * -useState => return array => first element of array is searchText and second element is function update the 
 *   variable
 * -const {searchText,setSearchText}=useState('Burger'): given initial value 'Burger' to searchText
 *    => const searchText=Burger:
 *  -It gives functionality to create a local variable and keep record of it 
 *  -Never used useState inside if statement, forloop
 * -Never used useState outside functional component because its created local variable for that component
 * 
 * useEffect: Takes callback function 
 * -We will call by passing dependency array ie. states , when state update it will called(After re-render) 
 * -It takes two parameter (Callback function, dependency array)
 * -If we pass empty dependecy array e.g.useEffect(()=>{getRestaurants();},[])then it will be called once 
 *  after initial render(componentDidMount)
 * -if we dont pass anything e.g.useEffect(()=>{getRestaurants();}); then it will called every render
 * -You can create as much as useEffect in one component
 * 
 * 
 * 
 * ******************************MicroServices*********************************
 * 
 * 
 * ****************************Api Call*********************************************
 * Two ways call api
 * -User loads website ->make an api call(200ms) -> renderpage(300ms) =>500ms
 *      (its not best practice ,no UI available 500ms)
 * -As soon as user loads page -> render initial UI -> make an api call=> update UI
 *      (its best practice to do , so UI available) we will acheive using useEffect
 * General practice
 * Make a call api with useEffect with empty dependency array then it will call an api once after initial render
 * 
 * ****************************Confitional Rendering**********************
 * Early Return : not render component
 * 
 * ****************************UI/UX**********************************
 * Loader:Shimmer effect (UI resembales actual UI)
 * 
 * **************************Routing************************
 * Client side routing
 * -no reload just navigate one component to another
 * Server side routing
 * -All of pages coming from server
 * -older ways(reload whole page when navigating)
 * 
 * *********************************Router*********************************
 * using react-router-dom npm package, we are using v6
 * -createBrowserRouter component imported from react-router-dom
 * --which create list of path e.g. home,aboutus, etc..
 * ---It creates list of path object const appRouter = 
 *      createBrowserRouter([ {path: "/",element: <AppLayout/>,errorElement:<Error/>,children:[{}]},{path: "/aboutus",element: <About/>})]
 * -RouterProvider is another componet imported from react-router-dom
 * --It will use to render routes using appRouter config
 * --Pass props "router" e.g.: root.render(<RouterProvider router={appRouter}/>)
 * -useRouterError: 
 * --Its hook provided by react-router-dom
 * --It provides error object
 * Never used <a> to navigate to router because it reloads whole when its navigate
 * react-router-dom gives Link component which is responsible for navigation
 * -Outlet its another component provided by react-router-dom
 * --const AppLayout = () =>{--return(<><Header/>Outlet Children component on the basis of route path e.g. /, /about, /contact etc <Outlet/><Footer/> </>
 * --It is used to render child component with layout header and footer on the basis of routes
 * --So, in createBrowserRouter we add one more tag children and provide object of children there
 * --And Outlet will takes all children and render on the basis of path
 * --In simple word <Outlet/> component is used for nested and conditional routing 
 * --It fills with what you wanted to show
 * -Dynamic Routing
 * --useParams: It return parameter from url
 * 
 * 
 * *******************************Class Component**********************
 * At the end of the day its just normal js class
 * Extends it with React.Component
 * It has render(), we cannot created class component without this method
 * This render() return some jsx
 * Everything in class component attached with this keyword
 *--When we passed props , we can access that props this.props.<propsname> 
 * In class component we will create constructor 
 * constructor: intialization of class
 * -constructor is a special member function used for initialisation and 
 * -hence we create the state variables inside a class constructor.
 * -- inside it use super(props) : super we used to use this key words
 * ---super(props): passed props inside it to access props (this.props)
 * --we create this.state under it
 * State
 * --We do not mutate state directly
 * --this.setState({count:1}) used for update state
 * 
 *   
 * 
 * **************************React Life Cycle****************
 * Life Cycle has three state
 *  Initially constructor will call then render and then componentDidMount
 * So api call must be in componentDidMount()
 * Life Cycle is divided into two phase
 * -Render phase:
 * --Constructor,render will call
 * -Commit phase
 * --update dom componentDidMount,componentDidUpdate,componentWillMount
 * e.g there is one parent and one child
 * -first load constructor of parent, render of parent
 * -In render it found child
 * --So its goes to child ,loads constructor and render and ComponentDid Mount
 * -Return to parent componentDidMount
 * e.g. there is two child called from one parent
 * RenderPhase
 * -Parent constructor
 * -Parent render
 * --child-constructorFirst child
 * --child-renderFirst child
 * --child-constructorSecond child
 * --child-renderSecond child
 * Commit Phase
 * --child-componentDidMountFirst child
 * --child-componentDidMountSecond child
 * -Parent componentDidMount
 * If we apply async in componentDidMount of first child
 * --child-componentDidMountSecond child
 * -Parent componentDidMount
 * --child-componentDidMountFirst child(its called but meanwhile it executes other)
 * 
 * 
 * So React batches up render phase and commit parent and each child
 * - it finishes Render phase of each component start from parent and 
 * - then finishes commit phase starts from child component 
 * 
 * React Life Cycle has three states
 * Mounting,Updating and Unmounting
 * Mounting:
 * -Renderphase: constructor,state,render
 * -Commitphase: componentDidMount(its called once after first render),setState
 * --after updating state, its re-render and then Updating start
 * Updating:
 * Renderphase: constructor,state,render
 * -Commitphase: componentDidUpdate(its called after every re-render),setState
 * Unmount:
 * -componentWillUnmount(): when we leaving webpage
 * -Why we need Unmount: cleanup the thing
 * --In SPA , we will need umnounting when we used setTimeout or setInterval
 * --because in SPA when we user navigate one page to another page, 
 * --page is not reload 
 * Never compare React Life Cycle Methods with Functional component hooks
 * we can async componentDidMount but cant be useEffect
 * 
 * 
 * **************************Custom Hook***************************
 * Why?
 * -Reusability,Readability, Maintainability(it is easy to debug), it makes a code more testable
 * -Modularity: we are broken down code to meaningful pieces.
 * When?
 * How?
 * 
 * Its just a normal js function and not necessarly to return jsx just like functional component
 * We can use useEffect and useState inside it, in normal function we cant use them
 *  
 *
 * 
 * **************************Code Optimization***********************
 * Inlarge scale application we cant bundle in one js file because we have numerous number of component and make our file bulky
 * There is concept of Chunking, Code Splitting, Dynamic Bundling, Lazy Bundling, On Demand Loading, Dynamic Import
 * Its all are same
 * Code Splitting
 * -Suppose I created large scale application where user can book hotel,train,flight,bus,packages
 * -So each module have several component
 * -So we will use this CHunking, code splitting etc(all in same)
 * -So when user go to anyone module suppose fligt is our home page
 * --so we can only load component of flight only 
 * ---If we use lazyLoading import of other module or component
 * -----const Train = lazy(()=> import("./components/Train")); //(it create separate bundle for this component)
 *------when you loading your component on demand and react try to render that componet
 *-------if it is not loaded then react suspended that component while rendering
 *--------To Avoid this wrap your Component in <Suspense><Train </Suspense> in our routes
 * --------{
            path: "/Train",
            element: <Suspense fallback={<Shimmer/>}><Train/></Suspense> //<Suspense> & lazy() imported from react
          },
       Fallback is props: suppose component takes time to load at that time it shows loader     
 * 
 * So, in simple word we can creates chunks for every module if there is huge module
 * lazy(()=> import("./components/Train"));
 * --it takes callback function and in import we need to pass file path 
 * 
 * Never ever lazy load any component inside of any component (because it lazy load every re-render cycle) 
 *
 * 
 * 
 * ****************************Css Framework(Tailwind)************************
 * How many ways we write css
 * -Normal css file  
 * -SCSS
 * -Inline css --Always avoid to write inline css
 * --Advantage: Saving Time
 * --Disavantage: 
 * ---not be reusable it makes repetative,
 * ---Difficult to maintain
 * ---Its difficult to proceess
 * -UI library like materila UI,Base UI, Ant UI, Chakara UI, Bootstrap UI
 * --Pros:Easy to use,inbuilt component,save lots of time, automated theming, consistent UI
 * --Cons:It makes bundle size heavy, loose lot of control UI appreance(customization pain)
 * -Styled Components: we can create component of each element like button,input and use them
 * --Cons:Not easy to use, less readable
 * 
 * -Tailwind CSS Framework
 * --Main Advantage : we can write code on the go (write css in same file of html)
 * --Reusability
 * ---It has inbuilt classes
 * --Less bundle size
 * --Flexible UI(We can easily customize)     
 * -Everything tellwind classname like <span class="text-bold"></span>
 * -PostCss -its tool to compile tailwind css to normal css by creating .postcssrc file
 * -square bracket notation when you wnat to customize tailwind classes like className="w-[200px]"
 * --Avoid as much as possible otherwise each customization tailwind create new classes
 * -Tailwind only included those class that we used in code , it makes bundle size less 
 * --Main cons: code looks ugly when we pass multiple clasess, code is not readable
 *  
 * Advantage of SCSS over Normal css
 * -Readibility, variable, reusability, nesting 
 * -Scss gives super power to writing css
 * -At the end of day SCSS converted into css
 *    
 * 
 * *************************Data Handling****************************************
 * 
 * 
 * 
 * 
 * 
 * 
 */
