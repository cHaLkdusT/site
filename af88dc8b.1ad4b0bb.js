(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{126:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(6),s=(n(0),n(141)),o={id:"e2e-tests",title:"End to End Tests",sidebar_label:"End to End Tests"},i={id:"e2e-tests",title:"End to End Tests",description:"End to End (E2E) tests are high level tests that tests. Instead of testing lower level functionality, such as if components render correctly or functions take certain arguments, they test at the application level. These are typically the kinds of tests that you would run to check if you app works. We have chosen [Testcafe](https://github.com/DevExpress/testcafe) as our testing framework. It is a much nicer alternative to [webdriverio](http://webdriver.io), [spectron](https://electronjs.org/spectron), and [selenium](https://www.seleniumhq.org).",source:"@site/docs/e2e-tests.md",permalink:"/docs/e2e-tests",sidebar_label:"End to End Tests",sidebar:"docs",previous:{title:"Component Tests",permalink:"/docs/component-tests"},next:{title:"CI",permalink:"/docs/ci"}},c=[{value:"Writing End to End Tests",id:"writing-end-to-end-tests",children:[]},{value:"Running Tests",id:"running-tests",children:[{value:"Watching Tests",id:"watching-tests",children:[]}]}],l={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"End to End (E2E) tests are high level tests that tests. Instead of testing lower level functionality, such as if components render correctly or functions take certain arguments, they test at the application level. These are typically the kinds of tests that you would run to check if you app works. We have chosen ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/DevExpress/testcafe"}),"Testcafe")," as our testing framework. It is a much nicer alternative to ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"http://webdriver.io"}),"webdriverio"),", ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://electronjs.org/spectron"}),"spectron"),", and ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.seleniumhq.org"}),"selenium"),"."),Object(s.b)("h2",{id:"writing-end-to-end-tests"},"Writing End to End Tests"),Object(s.b)("p",null,"By convention, all E2E test modules have the following filename suffix: ",Object(s.b)("inlineCode",{parentName:"p"},".e2e.js"),". An example of test module filename would be ",Object(s.b)("inlineCode",{parentName:"p"},"HomePage.e2e.js"),"."),Object(s.b)("p",null,"Here's some examples of E2E tests:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Testing if you app opens and closes"),Object(s.b)("li",{parentName:"ul"},"Testing if the title bar has the expected text"),Object(s.b)("li",{parentName:"ul"},"Testing if a popup shows after clicking a button")),Object(s.b)("p",null,"Here's an example of an E2E test:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"test('e2e', async t => {\n  await t.expect(getPageTitle()).eql('Hello Electron React!');\n});\n")),Object(s.b)("p",null,"Simply by reading this test, we can infer what it does:\n1. Gets the page title\n2. Asserts that it equals ",Object(s.b)("inlineCode",{parentName:"p"},"'Hello Electron React!'"),"\n3. Returns a promise"),Object(s.b)("p",null,"For more writing tests with Testcafe, refer to ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://devexpress.github.io/testcafe/documentation/test-api/"}),"their docs"),"."),Object(s.b)("h2",{id:"running-tests"},"Running Tests"),Object(s.b)("p",null,"After you have written E2E tests, we can now run tests. E2E tests must be built before running them. So we can run ",Object(s.b)("inlineCode",{parentName:"p"},"yarn build-e2e")," to build the E2E tests and then ",Object(s.b)("inlineCode",{parentName:"p"},"yarn test-e2e"),":"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"yarn build-e2e\nyarn test-e2e\n")),Object(s.b)("p",null,"If you would like to run the E2E tests in the background without them opening (headlessly), run ",Object(s.b)("inlineCode",{parentName:"p"},"START_MINIMIZED=true yarn build-e2e")," and then run the E2E tests:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"START_MINIMIZED=true yarn build-e2e\nyarn test-e2e\n")),Object(s.b)("h3",{id:"watching-tests"},"Watching Tests"),Object(s.b)("p",null,"Similar to watching component tests, can be watched as well. This can be done by running ",Object(s.b)("inlineCode",{parentName:"p"},"yarn test-e2e-live"),". ",Object(s.b)("inlineCode",{parentName:"p"},"testcafe --live")," is used to watch tests and run."))}p.isMDXComponent=!0},141:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,h=u["".concat(o,".").concat(d)]||u[d]||b[d]||s;return n?a.a.createElement(h,i({ref:t},l,{components:n})):a.a.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);