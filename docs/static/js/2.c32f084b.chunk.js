(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{36:function(e,t,l){},38:function(e,t,l){"use strict";var a=l(3),n=l.n(a),r=l(8),c=l(9),o=l(11),u=l(10),m=l(12),i=l(2),s=l.n(i),E=l(0),d=l.n(E),p=l(39),y=l(5),h=l.n(y),f=l(13),k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e};function v(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var b=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},N=function(e){function t(){var l,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,r=Array(n),c=0;c<n;c++)r[c]=arguments[c];return l=a=v(this,e.call.apply(e,[this].concat(r))),a.handleClick=function(e){if(a.props.onClick&&a.props.onClick(e),!e.defaultPrevented&&0===e.button&&!a.props.target&&!b(e)){e.preventDefault();var t=a.context.router.history,l=a.props,n=l.replace,r=l.to;n?t.replace(r):t.push(r)}},v(a,l)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),l=e.innerRef,a=function(e,t){var l={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(l[a]=e[a]);return l}(e,["replace","to","innerRef"]);h()(this.context.router,"You should not use <Link> outside a <Router>"),h()(void 0!==t,'You must specify the "to" property');var n=this.context.router.history,r="string"===typeof t?Object(f.b)(t,null,null,n.location):t,c=n.createHref(r);return s.a.createElement("a",k({},a,{onClick:this.handleClick,href:c,ref:l}))},t}(s.a.Component);N.propTypes={onClick:d.a.func,target:d.a.string,replace:d.a.bool,to:d.a.oneOfType([d.a.string,d.a.object]).isRequired,innerRef:d.a.oneOfType([d.a.string,d.a.func])},N.defaultProps={replace:!1},N.contextTypes={router:d.a.shape({history:d.a.shape({push:d.a.func.isRequired,replace:d.a.func.isRequired,createHref:d.a.func.isRequired}).isRequired}).isRequired};var C=N,x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},g="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var K=function(e){var t=e.to,l=e.exact,a=e.strict,n=e.location,r=e.activeClassName,c=e.className,o=e.activeStyle,u=e.style,m=e.isActive,i=e["aria-current"],E=function(e,t){var l={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(l[a]=e[a]);return l}(e,["to","exact","strict","location","activeClassName","className","activeStyle","style","isActive","aria-current"]),d="object"===("undefined"===typeof t?"undefined":g(t))?t.pathname:t,y=d&&d.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1");return s.a.createElement(p.a,{path:y,exact:l,strict:a,location:n,children:function(e){var l=e.location,a=e.match,n=!!(m?m(a,l):a);return s.a.createElement(C,x({to:t,className:n?[c,r].filter(function(e){return e}).join(" "):c,style:n?x({},u,o):u,"aria-current":n&&i||null},E))}})};K.propTypes={to:C.propTypes.to,exact:d.a.bool,strict:d.a.bool,location:d.a.object,activeClassName:d.a.string,className:d.a.string,activeStyle:d.a.object,style:d.a.object,isActive:d.a.func,"aria-current":d.a.oneOf(["page","step","location","date","time","true"])},K.defaultProps={activeClassName:"active","aria-current":"page"};var O=K,T=(l(36),function(e){function t(){var e,l;Object(r.a)(this,t);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(l=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={},l}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state.showMenu;return n.a.createElement("div",{className:"nav ".concat(t&&"show")},n.a.createElement("header",null,n.a.createElement("button",{type:"button",onClick:function(){return e.setState({showMenu:!0})},className:"burger"},"Menu")),n.a.createElement("p",{className:"logo"},"Courgette"),n.a.createElement("div",{className:"overlay",onClick:function(){return e.setState({showMenu:!1})}},n.a.createElement("div",{className:"overlay-inner"})),n.a.createElement("div",{className:"main-nav"},n.a.createElement("button",{type:"button",className:"close-btn",onClick:function(){return e.setState({showMenu:!1})}},"Close"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(O,{to:"/courgette/",activeClassName:"selected",exact:!0},"Overview")),n.a.createElement("li",null,n.a.createElement(O,{to:"/courgette/getting-started",activeClassName:"selected"},"Getting Started")),n.a.createElement("li",null,n.a.createElement(O,{to:"/courgette/faqs",activeClassName:"selected"},"FAQs")),n.a.createElement("li",null,n.a.createElement(O,{to:"/courgette/api",activeClassName:"selected"},"API")),n.a.createElement("li",null,n.a.createElement(O,{to:"/courgette/bdd",activeClassName:"selected"},"BDD - User Stories")))))}}]),t}(a.Component)),w=function(){return n.a.createElement("div",{className:"footer"})};t.a=function(e){var t=e.children,l=e.className;return n.a.createElement("div",null,n.a.createElement(T,null),n.a.createElement("div",{className:l||"main-container"},t),n.a.createElement(w,null))}},42:function(e,t,l){},53:function(e,t,l){"use strict";l.r(t);var a=l(3),n=l.n(a),r=l(38),c=(l(42),function(e){var t=e.children;return n.a.createElement("div",{className:"table__wrap"},n.a.createElement("table",{className:"table"},t))});t.default=function(){return n.a.createElement(r.a,{className:""},n.a.createElement("h1",null,"Methods for combining actions and assertions"),n.a.createElement("h2",null,"Methods that don\u2019t require page objects"),n.a.createElement(c,null,n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Method"),n.a.createElement("th",null,"Arguments")),n.a.createElement("tr",null,n.a.createElement("td",null,"setCookie"),n.a.createElement("td",null,"(name, value)")),n.a.createElement("tr",null,n.a.createElement("td",null,"goToURL"),n.a.createElement("td",null,"(url)")),n.a.createElement("tr",null,n.a.createElement("td",null,"pressKey"),n.a.createElement("td",null,"(key)")),n.a.createElement("tr",null,n.a.createElement("td",null,"disableAnimations"),n.a.createElement("td",null,"()")),n.a.createElement("tr",null,n.a.createElement("td",null,"clickElementWithText"),n.a.createElement("td",null,"(text)")),n.a.createElement("tr",null,n.a.createElement("td",null,"clickElementThatContainsText"),n.a.createElement("td",null,"(text)")),n.a.createElement("tr",null,n.a.createElement("td",null,"checkTitle"),n.a.createElement("td",null,"(expectedTitle)")),n.a.createElement("tr",null,n.a.createElement("td",null,"checkTitleIsNot"),n.a.createElement("td",null,"(expectedTitle)")),n.a.createElement("tr",null,n.a.createElement("td",null,"checkUrlIs"),n.a.createElement("td",null,"(url)")),n.a.createElement("tr",null,n.a.createElement("td",null,"checkUrlIsNot"),n.a.createElement("td",null,"(url)")),n.a.createElement("tr",null,n.a.createElement("td",null,"checkUrlContainsString"),n.a.createElement("td",null,"(expectedUrlPart)")),n.a.createElement("tr",null,n.a.createElement("td",null,"checkCookieContains"),n.a.createElement("td",null,"(cookieName, expectedValue)")),n.a.createElement("tr",null,n.a.createElement("td",null,"checkCookieDoesNotContain"),n.a.createElement("td",null,"(cookieName, expectedValue)")),n.a.createElement("tr",null,n.a.createElement("td",null,"checkCookieContent"),n.a.createElement("td",null,"(cookieName, expectedValue)")),n.a.createElement("tr",null,n.a.createElement("td",null,"checkCookieValueIsNot"),n.a.createElement("td",null,"(cookieName, expectedValue)")),n.a.createElement("tr",null,n.a.createElement("td",null,"checkCookieExists"),n.a.createElement("td",null,"(cookieName)")),n.a.createElement("tr",null,n.a.createElement("td",null,"checkCookieDoesNotExist"),n.a.createElement("td",null,"(cookieName)")),n.a.createElement("tr",null,n.a.createElement("td",null,"checkIsOpenedInNewWindow"),n.a.createElement("td",null,"(href)")))),n.a.createElement("h2",null,"Methods that require page objects"),n.a.createElement(c,null,n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Method"),n.a.createElement("th",null,"Arguments")),n.a.createElement("tr",null,n.a.createElement("td",null,"goToPage"),n.a.createElement("td",null,"(pageName)")),n.a.createElement("tr",null,n.a.createElement("td",null,"appendInputFieldValue"),n.a.createElement("td",null,"(value, locatorKey)")),n.a.createElement("tr",null,n.a.createElement("td",null,"appendReactInputFieldValue"),n.a.createElement("td",null,"(text, locatorKey)")),n.a.createElement("tr",null,n.a.createElement("td",null,"clearInputFieldValue"),n.a.createElement("td",null,"(locatorKey)")),n.a.createElement("tr",null,n.a.createElement("td",null,"clickElement"),n.a.createElement("td",null,"(locatorKey)")),n.a.createElement("tr",null,n.a.createElement("td",null,"clickElementInsideElement"),n.a.createElement("td",null,"(locatorKey)")),n.a.createElement("tr",null,n.a.createElement("td",null,"setInputFieldValue"),n.a.createElement("td",null,"(locatorKey, value)")),n.a.createElement("tr",null,n.a.createElement("td",null,"setReactInputFieldValue"),n.a.createElement("td",null,"(locatorKey, text)")),n.a.createElement("tr",null,n.a.createElement("td",null,"setSelectValueByOptionText"),n.a.createElement("td",null,"(locatorKey, itemText)")),n.a.createElement("tr",null,n.a.createElement("td",null,"submitForm"),n.a.createElement("td",null,"(locatorKey)")),n.a.createElement("tr",null,n.a.createElement("td",null,"checkAttribute"),n.a.createElement("td",null,"(locatorKey, expectedAttribute, expectedValue)")),n.a.createElement("tr",null,n.a.createElement("td",null,"hasClass"),n.a.createElement("td",null,"(locatorKey, className)")),n.a.createElement("tr",null,n.a.createElement("td",null,"doesNotHaveClass"),n.a.createElement("td",null,"(locatorKey, className)")),n.a.createElement("tr",null,n.a.createElement("td",null,"checkColour"),n.a.createElement("td",null,"(locatorKey, expectedColour, property)")),n.a.createElement("tr",null,n.a.createElement("td",null,"checkContainsAnyText"),n.a.createElement("td",null,"(locatorKey)")),n.a.createElement("tr",null,n.a.createElement("td",null,"checkDoesNotContainAnyText"),n.a.createElement("td",null,"(locatorKey)")),n.a.createElement("tr",null,n.a.createElement("td",null,"checkContainsText"),n.a.createElement("td",null,"(locatorKey, expectedText)")),n.a.createElement("tr",null,n.a.createElement("td",null,"checkDoesNotContainText"),n.a.createElement("td",null,"(locatorKey, expectedText)")),n.a.createElement("tr",null,n.a.createElement("td",null,"checkElementBackgroundColour"),n.a.createElement("td",null,"(locatorKey, expectedColour)")),n.a.createElement("tr",null,n.a.createElement("td",null,"checkElementBorderColour"),n.a.createElement("td",null,"(position, locatorKey, expectedColour)")),n.a.createElement("tr",null,n.a.createElement("td",null,"checkElementColour"),n.a.createElement("td",null,"(locatorKey, expectedColour)")),n.a.createElement("tr",null,n.a.createElement("td",null,"checkElementExists"),n.a.createElement("td",null,"(locatorKey)")),n.a.createElement("tr",null,n.a.createElement("td",null,"checkElementDoesNotExist"),n.a.createElement("td",null,"(locatorKey)")),n.a.createElement("tr",null,n.a.createElement("td",null,"checkElementExistsNTimes"),n.a.createElement("td",null,"(locatorKey, count)")),n.a.createElement("tr",null,n.a.createElement("td",null,"checkElementDoesNotExistNTimes"),n.a.createElement("td",null,"(locatorKey, count)")),n.a.createElement("tr",null,n.a.createElement("td",null,"checkInputIsEmpty"),n.a.createElement("td",null,"(locatorKey)")),n.a.createElement("tr",null,n.a.createElement("td",null,"checkInputIsNotEmpty"),n.a.createElement("td",null,"(locatorKey)")),n.a.createElement("tr",null,n.a.createElement("td",null,"checkInputValue"),n.a.createElement("td",null,"(locatorKey, expectedValue)")),n.a.createElement("tr",null,n.a.createElement("td",null,"checkInputValueIsNot"),n.a.createElement("td",null,"(locatorKey, expectedValue)")),n.a.createElement("tr",null,n.a.createElement("td",null,"checkIsEnabled"),n.a.createElement("td",null,"(locatorKey)")),n.a.createElement("tr",null,n.a.createElement("td",null,"checkIsDisabled"),n.a.createElement("td",null,"(locatorKey)")),n.a.createElement("tr",null,n.a.createElement("td",null,"checkIsSelected"),n.a.createElement("td",null,"(locatorKey)")),n.a.createElement("tr",null,n.a.createElement("td",null,"checkIsDeselected"),n.a.createElement("td",null,"(locatorKey)")),n.a.createElement("tr",null,n.a.createElement("td",null,"setPageObjectThenCheckUrl"),n.a.createElement("td",null,"(pageName)")),n.a.createElement("tr",null,n.a.createElement("td",null,"checkVisible"),n.a.createElement("td",null,"(locatorKey)")),n.a.createElement("tr",null,n.a.createElement("td",null,"checkHidden"),n.a.createElement("td",null,"(locatorKey)")),n.a.createElement("tr",null,n.a.createElement("td",null,"checkFocus"),n.a.createElement("td",null,"(locatorKey)")))))}}}]);
//# sourceMappingURL=2.c32f084b.chunk.js.map