export const questions = [
    {
      questionText:
        "Which of these Git client commands creates a copy of the repository and a working directory in the client’s workspace. (Choose one.)",
      answerOptions: [
        { answerText: "checkout", isCorrect: false },
        { answerText: "update", isCorrect: false },
        { answerText: "clone", isCorrect: true },
        { answerText: "import", isCorrect: false },
      ],
      answer:"clone"
    },
    {
      questionText:
        "In Git, which error would you get if you try to push master-branch changes to a remote repository, and someone else pushed changes to that same branch while you were making your changes? (Choose one.)",
      answerOptions: [
        { answerText: "404", isCorrect: false },
        { answerText: "Rejected", isCorrect: true },
        { answerText: "Access Denied", isCorrect: false },
        { answerText: "500", isCorrect: false },
      ],
      answer:"Rejected"
    },
    {
      questionText:
        "If you want to make radical changes to your team’s project and don’t want to impact the rest of the team, you should implement your changes in … ",
      answerOptions: [
        { answerText: "a tag", isCorrect: false },
        { answerText: "the branch", isCorrect: true },
        { answerText: "the trunk", isCorrect: false },
        { answerText: "the root", isCorrect: false },
      ],
      answer:"a branch"
    },
    {
      questionText:
        "Imagine that you just joined a development team that uses Git for version control and collaboration. To start contributing to the project, what Git operation would you most likely invoke first? a. checkout ",
      answerOptions: [
        { answerText: "Branch pointer", isCorrect: false },
        { answerText: "Commit object", isCorrect: false },
        { answerText: "HEAD pointer", isCorrect: false },
        { answerText: "a branch", isCorrect: true },
      ],
      answer:"a branch"
    },
    {
      questionText:
        "Now, imagine that you have a local repository, but other team members have pushed changes into the remote repository. What Git operation would you use to download those changes into your working copy? ",
      answerOptions: [
        { answerText: "checkout ", isCorrect: false },
        { answerText: "commit ", isCorrect: false },
        { answerText: "export ", isCorrect: false },
        { answerText: "pull", isCorrect: true },
      ],
       answer:"pull"
    },
    {
      questionText: "The Git clone command does which of the following? ",
      answerOptions: [
        { answerText: "Creates a working directory ", isCorrect: false },
        {
          answerText: "Makes a local copy of the repository ",
          isCorrect: false,
        },
        { answerText: "Commits a new branch ", isCorrect: false },
        { answerText: "a and b", isCorrect: true },
      ],
      answer:"a and b"
    },
    {
      questionText:
        "Which Git command changes where the HEAD pointer points and modifies the contents of the working directory? ",
      answerOptions: [
        { answerText: "pull", isCorrect: false },
        { answerText: "mv ", isCorrect: false },
        { answerText: "merge ", isCorrect: false },
        { answerText: "checkout ", isCorrect: true },
      ],
      answer:"checkout"
    },
    {
      questionText:
        "Which one of the following is not part of the data structure of a Git repository? ",
      answerOptions: [
        { answerText: "Body element ", isCorrect: true },
        { answerText: "Branch pointer ", isCorrect: false },
        { answerText: "Commit object ", isCorrect: false },
        { answerText: "HEAD pointer ", isCorrect: false },
      ],
       answer:"Body element"
    },
    {
      questionText:
        "Imagine that you just joined a development team that uses Git for version control and collaboration. To start contributing to the project, what Git operation would you most likely invoke first? ",
      answerOptions: [
        { answerText: "revert", isCorrect: false },
        { answerText: "export", isCorrect: false },
        { answerText: "checkout", isCorrect: false },
        { answerText: "clone", isCorrect: true },
      ],
       answer: "clone"
    },
    {
      questionText: "What is a state in React?",
      answerOptions: [
        { answerText: "Memory", isCorrect: false },
        { answerText: "External storage of the component", isCorrect: false },
        { answerText: "A permanent storage", isCorrect: false },
        { answerText: "Internal storage of the component", isCorrect: true },
      ],
      answer: "Internal storage of the component"
    },
    {
      questionText:
        "Which of the following is used to pass data to a component from outside in React.js?",
      answerOptions: [
        { answerText: "Render with arguments", isCorrect: false },
        { answerText: "PropTypes", isCorrect: false },
        { answerText: "SetState", isCorrect: false },
        { answerText: "Props", isCorrect: true },
      ],
       answer: "Props"
    },
    {
      questionText: "What are the two ways to handle data in React?",
      answerOptions: [
        { answerText: "Services & Components", isCorrect: false },
        { answerText: "State & Component", isCorrect: false },
        { answerText: "State & Services", isCorrect: false },
        { answerText: "State & Props", isCorrect: true },
      ],
      answer: "State & Props"
    },
    {
      questionText: "Which of the following is the correct name of React.js?",
      answerOptions: [
        { answerText: "React", isCorrect: false },
        { answerText: "React.js", isCorrect: false },
        { answerText: "Reactjs", isCorrect: false },
        { answerText: "All of The above", isCorrect: true },
      ],
      answer: "All of The above"
    },
    {
      questionText: "how many countries inWhat does ES6 stand for? ",
      answerOptions: [
        { answerText: "ECMAScript 6", isCorrect: true },
        { answerText: "ECMA 6", isCorrect: false },
        { answerText: "EJavaScript 6", isCorrect: false },
        { answerText: "ECMAJavaScript 6", isCorrect: true },
      ],
       answer: "ECMAScript 6"
    },
    {
      questionText:
        "In which of the following directory React.js components are saved?",
      answerOptions: [
        { answerText: "Inside the vendor/components/", isCorrect: false },
        { answerText: "Inside the vendor/", isCorrect: false },
        { answerText: "Inside the js/components/", isCorrect: true },
        { answerText: "4.	Inside the external/components/", isCorrect: false },
      ],
      answer: "Inside the js/components/"
    },
    {
      questionText:
        "Which of the following option is correct in the case of the Babel?",
      answerOptions: [
        { answerText: "Babel is a Transpolar", isCorrect: false },
        { answerText: "Babel is a Compiler", isCorrect: false },
        { answerText: "All Of The Above", isCorrect: true },
        { answerText: "None Of The Above", isCorrect: false },
      ],
      answer: "All Of The Above"
    },
    {
      questionText:
        "Which of the following is a must API for every React.js component?",
      answerOptions: [
        { answerText: "render Component", isCorrect: true },
        { answerText: "Setinitial Component", isCorrect: false },
        { answerText: "render", isCorrect: false },
        { answerText: "All Of The Above", isCorrect: false },
      ],
      answer: "render Component"
    },
    {
      questionText:
        " Which of the following statement is true for uncontrolled components in React.js?",
      answerOptions: [
        {
          answerText: "The source of truth is a component state",
          isCorrect: false,
        },
        { answerText: "The source of truth is DOM", isCorrect: true },
        {
          answerText: "The source of truth can be anything",
          isCorrect: false,
        },
        { answerText: "None", isCorrect: false },
      ],
      answer: "The source of truth is DOM"
    },
    {
      questionText:
        " What of the following is used in React.js to increase performance?",
      answerOptions: [
        { answerText: "Original DOM", isCorrect: false },
        { answerText: "Virtual DOM", isCorrect: true },
        { answerText: "None Of The Above", isCorrect: false },
        { answerText: "All of above", isCorrect: false },
      ],
       answer: "Virtual DOM"
    },
    {
      questionText:
        "What will happen if you render an input element with disabled = {false}?",
      answerOptions: [
        { answerText: "It will not be rendered at all", isCorrect: false },
        { answerText: "It will be rendered as enabled", isCorrect: true },
        { answerText: "It will be rendered as disabled", isCorrect: false },
        { answerText: "None Of The Above", isCorrect: true },
      ],
      answer: "It will be rendered as enabled"
    },
    {
      questionText:
        "What changes would appear in the component as soon as the state of the React component is changed?",
      answerOptions: [
        { answerText: "It will re-render the component", isCorrect: true },
        {
          answerText: "It can be created again from scratch",
          isCorrect: false,
        },
        {
          answerText:
            "It will do nothing; you have to call render method to render the component again",
          isCorrect: false,
        },
        { answerText: "None", isCorrect: false },
      ],
      answer: "It will re-render the component"
    },
    {
      questionText: "Who developed Typescript?",
      answerOptions: [
        { answerText: "Anders Hejlsberg ", isCorrect: true },
        { answerText: "Mark Candy", isCorrect: false },
        { answerText: "Stanlacke", isCorrect: false },
        { answerText: "None", isCorrect: false },
      ],
       answer: "Anders Hejlsberg"
    },
    {
      questionText: "TypeScript was introduced in the year of",
      answerOptions: [
        { answerText: "2019", isCorrect: false },
        { answerText: "2012", isCorrect: true },
        { answerText: "2013", isCorrect: false },
        { answerText: "2020", isCorrect: false },
      ],
       answer: "2012"
    },
    {
      questionText: "What are the built-in types in Typescript?",
      answerOptions: [
        { answerText: "Number type", isCorrect: false },
        { answerText: "Boolean type", isCorrect: false },
        { answerText: "Null type", isCorrect: false },
        { answerText: "All OF The Above", isCorrect: true },
      ],
      answer: "All OF The Above"
    },
    {
      questionText: "Can a typescript be installed or managed through?",
      answerOptions: [
        { answerText: "Void", isCorrect: false },
        { answerText: "Space", isCorrect: false },
        { answerText: "Nmp", isCorrect: false },
        { answerText: "Tag", isCorrect: true },
      ],
      answer: "Tag"
    },
    {
      questionText: "What are different components of TypeScript?",
      answerOptions: [
        { answerText: "Language", isCorrect: false },
        { answerText: "Compiler", isCorrect: false },
        { answerText: "Language Service", isCorrect: false },
        { answerText: "All Of The Above", isCorrect: true },
      ],
      answer: "All Of The Above"
    },
    {
      questionText: "Which object-oriented terms are supported by TypeScript?",
      answerOptions: [
        { answerText: "Interfaces", isCorrect: false },
        { answerText: "Data Types", isCorrect: false },
        { answerText: "Member functions", isCorrect: false },
        { answerText: "ALL Of The Above", isCorrect: true },
      ],
      answer: "All Of The Above"
    },
    {
      questionText:
        "Which of the following is the typing principle of typescript?",
      answerOptions: [
        { answerText: "Gradual", isCorrect: false },
        { answerText: "Dynamic", isCorrect: false },
        { answerText: "Duck", isCorrect: false },
        { answerText: "All Of The Above", isCorrect: true },
      ],
      answer: "All Of The Above"
    },
    {
      questionText: "Which is not true about typescript?",
      answerOptions: [
        { answerText: "It is interpreted like javascript", isCorrect: false },
        { answerText: "It is a superset of javascript", isCorrect: false },
        { answerText: "It does support static data types", isCorrect: true },
        { answerText: "Typescript is case sensitive", isCorrect: false },
      ],
       answer: "It does support static data types"
    },
    {
      questionText: "….are the way to organize code in typescript.",
      answerOptions: [
        { answerText: "Modules", isCorrect: true },
        { answerText: "Classes", isCorrect: false },
        { answerText: "Method", isCorrect: false },
        { answerText: "Arrow", isCorrect: false },
      ],
      answer: "All Of The Above"
    },
    {
      questionText: " What are the disadvantages of TypeScript?",
      answerOptions: [
        { answerText: "doestnt fix Javascript problems", isCorrect: false },
        { answerText: "one more tool to learn", isCorrect: false },
        {
          answerText: "has a dependency on type definition files ",
          isCorrect: false,
        },
        { answerText: "All Of The Above", isCorrect: true },
      ],
      answer: "All Of The Above"
    },
    {
      questionText: "Which of the following are the advantages of React.js?",
      answerOptions: [
        {
          answerText:
            "React.js can increase the application's performance with Virtual DOM.",
          isCorrect: false,
        },
        {
          answerText:
            "React.js is easy to integrate with other frameworks such as Angular",
          isCorrect: false,
        },
        {
          answerText: "React.js can render both on client and server side",
          isCorrect: false,
        },
        { answerText: "All Of The Above", isCorrect: true },
      ],
      answer: "All Of The Above"
    },
    {
      questionText:
        "Which of the following command is used to install create-react-app?",
      answerOptions: [
        { answerText: "npm install -g create-react-app", isCorrect: true },
        { answerText: "npm install create-react-app", isCorrect: false },
        { answerText: "npm install -f create-react-app", isCorrect: false },
        { answerText: "install -g create-react-app", isCorrect: false },
      ],
      answer: "npm install -g create-react-app"
    },
    {
      questionText:
        "A class is a type of function, but instead of using the keyword function to initiate it, which keyword do we use?",
      answerOptions: [
        { answerText: "Constructor", isCorrect: false },
        { answerText: "Class", isCorrect: true },
        { answerText: "Object", isCorrect: false },
        { answerText: "DataObject", isCorrect: false },
      ],
      answer: "Class"
    },
    {
      questionText: "What is the default port where webpack-server runs?",
      answerOptions: [
        { answerText: "3000", isCorrect: true },
        { answerText: "9000", isCorrect: false },
        { answerText: "2000", isCorrect: false },
        { answerText: "1000", isCorrect: false },
      ],
      answer: "3000"
    },
    {
      questionText:
        "How many numbers of elements a valid react component can return?",
      answerOptions: [
        { answerText: "1", isCorrect: true },
        { answerText: "2", isCorrect: false },
        { answerText: "3", isCorrect: false },
        { answerText: "4", isCorrect: false },
      ],
      answer: "1"
    },
    {
      questionText:
        "What is the declarative way to render a dynamic list of components based on values in an array?",
      answerOptions: [
        { answerText: "Using the reduce array method", isCorrect: false },
        { answerText: "Using the <Each /> component", isCorrect: false },
        { answerText: "Using the Array.map() method", isCorrect: true },
        { answerText: "With a for/while loop", isCorrect: false },
      ],
       answer: "Using the Array.map() method"
    },
    {
      questionText: " How many ways of defining your variables in ES6?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "3", isCorrect: true },
        { answerText: "4", isCorrect: false },
        { answerText: "5", isCorrect: true },
      ],
      answer: "3"
    },
    {
      questionText: " Which of the following method is not a part of ReactDOM?",
      answerOptions: [
        { answerText: "ReactDOM.destroy()", isCorrect: true },
        { answerText: "ReactDOM.hydrate()", isCorrect: false },
        { answerText: "ReactDOM.createPortal()", isCorrect: false },
        { answerText: "ReactDOM.findDOMNode()", isCorrect: false },
      ],
      answer: "ReactDOM.destroy()"
    },
    {
      questionText:
        " How can you set a default value for an uncontrolled form field?",
      answerOptions: [
        { answerText: "By using the value property", isCorrect: false },
        { answerText: "By using the defaultValue property", isCorrect: true },
        { answerText: "By using the default property", isCorrect: false },
        { answerText: "It is assigned automatically.", isCorrect: false },
      ],
      answer: "By using the defaultValue property"
    },
    {
      questionText:
        "Which of the following statement is true for controlled components in React.js?",
      answerOptions: [
        { answerText: "The source of truth is DOM.", isCorrect: false },
        {
          answerText: "The source of truth can be anything.",
          isCorrect: false,
        },
        {
          answerText: "The source of truth is a component state.",
          isCorrect: true,
        },
        { answerText: "None of the above.", isCorrect: false },
      ],
       answer: "The source of truth is a component state."
    },
    {
      questionText:
        "What is the use of the create-react-app command in the React.js application?",
      answerOptions: [
        { answerText: "It is used to update a React app.", isCorrect: false },
        {
          answerText: "It is used to create a new React app.",
          isCorrect: true,
        },
        { answerText: "It is used to install dependencies.", isCorrect: false },
        { answerText: "None", isCorrect: false },
      ],
      answer: "It is used to create a new React app."
    },
    {
      questionText:
        " What is true for the keys given to a list of elements in React?",
      answerOptions: [
        { answerText: "Unique in the DOM.", isCorrect: false },
        { answerText: "Unique among the siblings only", isCorrect: true },
        { answerText: "Do not require to be unique.", isCorrect: false },
        { answerText: "None", isCorrect: false },
      ],
       answer: "Unique among the siblings only"
    },
    {
      questionText: " React is a _________.",
      answerOptions: [
        { answerText: "Web development Framework", isCorrect: false },
        { answerText: "JavaScript Library", isCorrect: true },
        { answerText: "jQuery", isCorrect: false },
        { answerText: "Web Server", isCorrect: false },
      ],
      answer: "JavaScript Library"
    },
    {
      questionText: "Which ReactJS function renders HTML to the web page?",
      answerOptions: [
        { answerText: "render()", isCorrect: false },
        { answerText: "ReactDOM.render()", isCorrect: true },
        { answerText: "renders()", isCorrect: false },
        { answerText: "ReactDOM.renders()", isCorrect: false },
      ],
        answer: "ReactDOM.render()"
    },
    {
      questionText: "JSX stands for _____.",
      answerOptions: [
        { answerText: "JSON", isCorrect: false },
        { answerText: "JSON XML", isCorrect: false },
        { answerText: "JavaScript XML", isCorrect: true },
        { answerText: "JavaScript and AngularJS", isCorrect: false },
      ],
      answer: "JavaScript XML"
    },

     {
      questionText: "Which method is used to generate lists?",
      answerOptions: [
        { answerText: "map()", isCorrect: false },
        { answerText: "generate()", isCorrect: false },
        { answerText: "new()", isCorrect: true },
        { answerText: "maps()", isCorrect: false },
      ],
       answer: "new() "
    },
     {
      questionText: "What is the correct syntax to write expression in JSX?",
      answerOptions: [
        { answerText: "[ expression ]", isCorrect: false },
        { answerText: "{ expression }", isCorrect: true },
        { answerText: "{{ expression }}", isCorrect: false },
        { answerText: "_expression", isCorrect: false },
      ],
        answer: "{ expression } "
    },

     {
      questionText: " What are Props?",
      answerOptions: [
        { answerText: "Props are arguments passed into React components", isCorrect: true },
        { answerText: "Props are functions in the ReactJS", isCorrect: false },
        { answerText: "Props are used to returns multiple values from the function", isCorrect: false },
        { answerText: "All The Above", isCorrect: false },
      ],
       answer: "Props are arguments passed into React components "
    },
    
     {
      questionText: "JSX allows us to write _____.",
      answerOptions: [
        { answerText: "HTML in React", isCorrect: true },
        { answerText: "MySQL in ReactL", isCorrect: false },
        { answerText: "Angular Code in React", isCorrect: false },
        { answerText: "jQuery in React", isCorrect: false },
      ],
      answer: "HTML in React "
    },
  ];