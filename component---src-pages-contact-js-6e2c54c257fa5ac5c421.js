webpackJsonp([70144966829960],{"./src/components/ContactForm.js":function(n,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function l(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function s(e,n){return e.raw=n,e}t.__esModule=!0;var d=s(["\n  background-color: ",";\n  display: flex;\n  flex-flow: column;\n  padding: 1.45rem;\n  border-radius: .25rem;\n  color: white;\n  width: 18rem;\n  ","\n"],["\n  background-color: ",";\n  display: flex;\n  flex-flow: column;\n  padding: 1.45rem;\n  border-radius: .25rem;\n  color: white;\n  width: 18rem;\n  ","\n"]),c=s(["\n    width: 22rem;\n  "],["\n    width: 22rem;\n  "]),u=s(["\n  border-radius: .25rem;\n  margin-right: 20%;\n  transition: ",";\n  font-size: .9rem;\n  border: none;\n  padding: .25rem;\n  margin-bottom: .25rem;\n  &:focus{\n    padding: .5rem;\n    margin-right: 0;\n    outline: none;\n    box-shadow: ",";\n  }\n"],["\n  border-radius: .25rem;\n  margin-right: 20%;\n  transition: ",";\n  font-size: .9rem;\n  border: none;\n  padding: .25rem;\n  margin-bottom: .25rem;\n  &:focus{\n    padding: .5rem;\n    margin-right: 0;\n    outline: none;\n    box-shadow: ",";\n  }\n"]),m=s(["\n  border-radius: .25rem;\n  border: none;\n  margin-right: 20%;\n  transition: .3s ease;\n  font-size: .9rem;\n  padding: .25rem;\n  resize: none;\n  margin-bottom: .25rem;\n  &:focus{\n    padding: .5rem;\n    margin-right: 0;\n    outline: none;\n    box-shadow: ",";\n    height: 6rem;\n  }\n"],["\n  border-radius: .25rem;\n  border: none;\n  margin-right: 20%;\n  transition: .3s ease;\n  font-size: .9rem;\n  padding: .25rem;\n  resize: none;\n  margin-bottom: .25rem;\n  &:focus{\n    padding: .5rem;\n    margin-right: 0;\n    outline: none;\n    box-shadow: ",";\n    height: 6rem;\n  }\n"]),f=s(["\n  max-width: 6rem;\n  justify-content: center;\n  align-self: center;\n  &:hover{\n    color: ",";\n    background-color: white;\n  }\n"],["\n  max-width: 6rem;\n  justify-content: center;\n  align-self: center;\n  &:hover{\n    color: ",";\n    background-color: white;\n  }\n"]),p=s(["\n  padding: .25rem 0;\n"],["\n  padding: .25rem 0;\n"]),g=s(["\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n"],["\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n"]),b=r("./node_modules/react/react.js"),h=o(b),x=r("./node_modules/gatsby-link/index.js"),y=(o(x),r("./node_modules/styled-components/lib/index.js")),w=o(y),j=r("./node_modules/styled-components-breakpoint/dist/index.js"),_=o(j),E=r("./src/utils/styled-components.js"),k=r("./node_modules/react-i18next/dist/commonjs/index.js"),v=w.default.form(d,function(e){return e.theme.color.po},function(e){return(0,_.default)("sm",e.theme.breakpoints)(c)}),z=w.default.input(u,function(e){return e.theme.effects.transition},function(e){return e.theme.effects.shadow[0]}),S=w.default.textarea(m,function(e){return e.theme.effects.shadow[0]}),M=E.Button.extend(f,function(e){return e.theme.color.p}),q=w.default.label(p),F=(w.default.div(g),function(n){function t(e){a(this,t);var r=l(this,n.call(this,e));return r.state={name:"",organization:"",phone:"",email:"",subject:"",message:"",isSubmit:!1,isSuccess:null},r}return i(t,n),t.prototype.handleSubmit=function(){var n=this;e.preventDefault();var t=new FormData;t.append("name",this.state.name),t.append("organization",this.state.organization),t.append("phone",this.state.phone),t.append("_replyto",this.state.email),t.append("subject",this.state.subject),t.append("message",this.state.message);var r=new XMLHttpRequest;r.open("POST","https://formspree.io/"+this.props.contactEmail),r.onreadystatechange=function(){r.readyState==XMLHttpRequest.DONE&&200==r.status?n.setState({isSubmit:!0,isSuccess:!0}):n.setState({isSubmit:!0,isSuccess:!1})},r.send(t)},t.prototype.render=function(){var e=this.props.t;return h.default.createElement(v,null,h.default.createElement(q,{htmlFor:"name"},e("contact.form.name")),h.default.createElement(z,{id:"name",placeholder:"ie: Jane Doe",required:!0}),h.default.createElement(q,{htmlFor:"organization"},e("contact.form.organization")),h.default.createElement(z,{htmlForm:"organization",placeholder:"ie: Doe Middle School"}),h.default.createElement(q,{htmlFor:"email"},e("contact.form.email")),h.default.createElement(z,{type:"email",id:"email",placeholder:"ie: jane.doe@gmail.com",required:!0}),h.default.createElement(q,{htmlFor:"phone"},e("contact.form.phone")),h.default.createElement(z,{type:"tel",id:"phone",placeholder:"(123) 456-7890"}),h.default.createElement(q,{htmlFor:"subject"},e("contact.form.subject")),h.default.createElement(z,{id:"subject",placeholder:"Your Subject",required:!0}),h.default.createElement(q,{htmlFor:"message"},e("contact.form.message")),h.default.createElement(S,{id:"message",placeholder:"Your message here",required:!0}),h.default.createElement("br",null),h.default.createElement(M,{onClick:this.handleSubmit},e("contact.form.submit")))},t}(h.default.Component));t.default=(0,k.translate)()(F),n.exports=t.default},"./src/components/ContactInfo.js":function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,n){return e.raw=n,e}n.__esModule=!0;var a=o(["\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  background-color: ",";\n  width: 18rem;\n  padding: 2rem;\n  text-align: center;\n  margin: .25rem;\n  font-size: .9rem;\n  ",";\n"],["\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  background-color: ",";\n  width: 18rem;\n  padding: 2rem;\n  text-align: center;\n  margin: .25rem;\n  font-size: .9rem;\n  ",";\n"]),l=o(["\n    width: 22rem;\n  "],["\n    width: 22rem;\n  "]),i=o(["\n  margin: .85rem;\n  white-space: pre-line;\n"],["\n  margin: .85rem;\n  white-space: pre-line;\n"]),s=o(["\n"],["\n"]),d=o(["\n\n"],["\n\n"]),c=o(["\n  max-width: 8rem;\n  border-top: 2px solid ",";\n  padding: .5rem;\n"],["\n  max-width: 8rem;\n  border-top: 2px solid ",";\n  padding: .5rem;\n"]),u=o(["\n  text-decoration: none;\n  color: ",";\n"],["\n  text-decoration: none;\n  color: ",";\n"]),m=t("./node_modules/react/react.js"),f=r(m),p=t("./node_modules/styled-components/lib/index.js"),g=r(p),b=t("./node_modules/styled-components-breakpoint/dist/index.js"),h=r(b),x=g.default.div(a,function(e){return e.theme.color.lo},function(e){return(0,h.default)("sm",e.theme.breakpoints)(l)}),y=g.default.h6(i),w=y.extend(s),j=y.extend(d),_=y.extend(c,function(e){return e.theme.color.p}),E=g.default.a(u,function(e){return e.theme.color.p}),k=y.extend(d),v=y.extend(d),z=function(e){var n=e.contact,t=e.author,r=e.legal;return f.default.createElement(x,null,f.default.createElement(w,null,n.address),f.default.createElement(j,null,n.phone),f.default.createElement(v,null,n.email),f.default.createElement(k,null,r),f.default.createElement(_,{href:t.link},"Website by ",f.default.createElement("br",null),f.default.createElement(E,{href:t.link},t.name)))};n.default=z,e.exports=n.default},"./src/components/RegistrationBar.js":function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,n){return e.raw=n,e}n.__esModule=!0;var a=o(["\n  width: 100%;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 999;\n  background-color: ",";\n  ",";\n"],["\n  width: 100%;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 999;\n  background-color: ",";\n  ",";\n"]),l=o(["\n    position: fixed;\n  "],["\n    position: fixed;\n  "]),i=o(["\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  min-width: 300px;\n  max-width: 400px;\n  padding: .25rem;\n"],["\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  min-width: 300px;\n  max-width: 400px;\n  padding: .25rem;\n"]),s=o(["\n  width: 8rem;\n  ","\n"],["\n  width: 8rem;\n  ","\n"]),d=o(["\n    width: 16rem;\n  "],["\n    width: 16rem;\n  "]),c=t("./node_modules/react/react.js"),u=r(c),m=t("./node_modules/styled-components/lib/index.js"),f=r(m),p=t("./node_modules/styled-components-breakpoint/dist/index.js"),g=r(p),b=t("./node_modules/gatsby-link/index.js"),h=r(b),x=t("./src/utils/styled-components.js"),y=t("./node_modules/react-i18next/dist/commonjs/index.js"),w=f.default.div(a,function(e){return e.theme.color.lo},function(e){return(0,g.default)("sm",e.theme.breakpoints)(l)}),j=f.default.nav(i),_=x.Button.extend(s,function(e){return(0,g.default)("sm",e.theme.breakpoints)(d)}),E=function(e){var n=e.t;return u.default.createElement(w,null,u.default.createElement(j,null,u.default.createElement(h.default,{to:"/registration/"},u.default.createElement(_,null,n("register.patient"))),u.default.createElement(h.default,{to:"/contact/"},u.default.createElement(_,null,n("register.organization")))))};n.default=(0,y.translate)()(E),e.exports=n.default},'./node_modules/babel-loader/lib/index.js?{"plugins":["/home/bobby/projects/Practice/nslb-gatsby/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/home/bobby/projects/Practice/nslb-gatsby/node_modules/babel-plugin-add-module-exports/lib/index.js","/home/bobby/projects/Practice/nslb-gatsby/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/home/bobby/projects/Practice/nslb-gatsby/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/home/bobby/projects/Practice/nslb-gatsby/node_modules/babel-preset-stage-0/lib/index.js","/home/bobby/projects/Practice/nslb-gatsby/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/contact.js':function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,n){return e.raw=n,e}n.__esModule=!0,n.query=void 0;var a=o(["\n  background-image:   linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)),\n  url('http://res.cloudinary.com/ds0f4qyyt/image/upload/s--Apiy0pSL--/c_scale,q_jpegmini,w_3773/v1493834434/london_f0prw6.jpg');\n"],["\n  background-image:   linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)),\n  url('http://res.cloudinary.com/ds0f4qyyt/image/upload/s--Apiy0pSL--/c_scale,q_jpegmini,w_3773/v1493834434/london_f0prw6.jpg');\n"]),l=o(["\n\n"],["\n\n"]),i=o(["\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n"],["\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n"]),s=o(["\n  display: flex;\n  flex-flow: column;\n  padding: .5rem 1rem;\n  border-top: 2px solid ",";\n  border-bottom: 2px solid ",";\n  margin-bottom: 2rem;\n  ",";\n  width: 18rem;\n  ",";\n"],["\n  display: flex;\n  flex-flow: column;\n  padding: .5rem 1rem;\n  border-top: 2px solid ",";\n  border-bottom: 2px solid ",";\n  margin-bottom: 2rem;\n  ",";\n  width: 18rem;\n  ",";\n"]),d=o(["\n    flex-flow: row;\n  "],["\n    flex-flow: row;\n  "]),c=o(["\n    width: 22rem;\n  "],["\n    width: 22rem;\n  "]),u=o(["\n  font-size: 1.125rem;\n  color: ",";\n  padding: .5rem;\n  align-self: center;\n"],["\n  font-size: 1.125rem;\n  color: ",";\n  padding: .5rem;\n  align-self: center;\n"]),m=t("./node_modules/react/react.js"),f=r(m),p=t("./node_modules/gatsby-link/index.js"),g=r(p),b=t("./node_modules/styled-components/lib/index.js"),h=r(b),x=t("./node_modules/styled-components-breakpoint/dist/index.js"),y=r(x),w=t("./src/components/ContactForm.js"),j=r(w),_=t("./src/utils/styled-components.js"),E=t("./src/components/RegistrationBar.js"),k=(r(E),t("./src/components/ContactInfo.js")),v=r(k),z=t("./node_modules/react-i18next/dist/commonjs/index.js"),S=_.PhotoWrapper.extend(a),M=(h.default.label(l),h.default.div(i)),q=h.default.div(s,function(e){return e.theme.color.p},function(e){return e.theme.color.p},function(e){return(0,y.default)("md",e.theme.breakpoints)(d)},function(e){return(0,y.default)("sm",e.theme.breakpoints)(c)}),F=h.default.label(u,function(e){return e.theme.color.l}),P=function(e){var n=e.data,t=e.t;return f.default.createElement(M,null,f.default.createElement(S,null),f.default.createElement(_.PageHeader,null,t("contact.header")),f.default.createElement("h4",{dangerouslySetInnerHTML:{__html:t("contact.subheader")},style:{textAlign:"center",color:"white",lineHeight:"1.2rem"}}),f.default.createElement(j.default,{contactEmail:n.site.siteMetadata.contact.email}),f.default.createElement(q,null,f.default.createElement(F,{htmlFor:"register"},t("contact.register")),f.default.createElement(g.default,{style:{alignSelf:"center"},id:"register",to:"/registration/"},f.default.createElement(_.Button,null,t("contact.registerButton")))),f.default.createElement(v.default,{contact:n.site.siteMetadata.contact,author:n.site.siteMetadata.author,legal:n.site.siteMetadata.legal}))};n.query="** extracted graphql fragment **";n.default=(0,z.translate)()(P)}});
//# sourceMappingURL=component---src-pages-contact-js-6e2c54c257fa5ac5c421.js.map