/**
 * Npm init (it gives package.json(configuration of node packages))
 * npm i -D parcel (install parcel with dev-dependency -D )
 * Create script(package.json under script: we define commands to start and build project)
 * npx is used for execute package without installing it
 * npx = npm run
 * npm run start = npm start
 * 
 * 
 * *****************************parcel**************************************
 * 
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
 */