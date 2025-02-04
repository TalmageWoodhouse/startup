# CS 260 Notes

# Startup Soecification deliverable:

Mermaid markdown diagram

To have boxes to check off you use brackets with an x. [x]

API stands for Application Programming Interface. It is a set of rules and protocols that allows different software applications to communicate with each other. An API defines the methods and data formats that programs can use to request services from operating systems, libraries, or other applications. APIs are commonly used to enable the integration of different systems, allowing them to share data and functionalities seamlessly.

An interface refers to a point of interaction between different systems, devices, or components, allowing them to communicate and work together. It defines the way in which components interact, specifying the inputs, outputs, and operations that can be performed. Interfaces can be categorized into several types:

    1. User Interface (UI): The space where human users interact with a computer, software, or device. Examples include graphical user interfaces (GUIs) like buttons, icons, and menus.
    2. Programming Interface: This allows software components or applications to communicate with each other. For example:
        - Application Programming Interface (API): Specifies how software components should interact, enabling the integration of various systems.
        - Hardware Interface: Defines how hardware components communicate with each other or with software, such as USB or HDMI interfaces.

- React handles the interactive and dynamic user interface.
- Web Service manages the core game logic and business rules.
- DB/Login secures user data and enables personalized experiences.
- WebSocket provides real-time communication for a seamless, interactive gaming experience.

# AWS Delivereable notes

### Launching an AWS server instance.

- ssh -i ~/Documents/byucs/cs260/production.pem ubuntu@54.235.224.169
- making a key pair file
  Route 56 service, creating a domain name
- create the root domain DNS record. This will associate your domain name with your server's IP address and allow you to use your domain name in the browser to navigate to your server.
- create a DNS record that will map to your server for any subdomain of your root domain name. This is possible because DNS allows you to specify wildcards for a DNS record.
  Set up HTTPS, TLS, and web certificates
- Secured my web server communication by configuring Caddy to request a certificate from Let's Encrypt for you domain name

# HTML notes

learned basic structure and format for html. learned how hrefs work to link to other pages in application or other websites.
The three basic things HTML is made of. Its all about learning different types of these you can use.

### Elements and tags

### Attributes

### Hyperlinks

Use [My Code Pen](https://codepen.io/TalmageWoodhouse) to practice and try out things that I may want to use for my startup.

# CSS notes

## CSS Selectors

### element type selector

```css
body {
  font-family: sans-serif;
}
```

```css
h1 {
  border-bottom: thin black solid;
}
section {
  background: #eeeeee;
  padding: 0.25em;
  margin-bottom: 0.5em;
}
```

### combinators

[CombinatorsChart](Cominatorschart.png)

```css
section h2 {
  color: #004400;
}
```

```css
h2 ~ p {
  padding-left: 0.5em;
}
```

### class selector

```css
.summary {
  font-weight: bold;
}
```

```css
p.summary {
  font-weight: bold;
}
```

### ID Selector

```css
#physics {
  border-left: solid 1em purple;
}
```

### Attribute selector

```css
p[class="summary"] {
  color: red;
}
```

### Psuedo selector

This allows someon to change the style based on positional relationships mouse interaction, hyperlink vistationstates, and attributes.
whenever a section is hovered over.

```css
section:hover {
  border-left: solid 1em purple;
}
```

## CSS Declarations

Rule declarations specify a property and a value to assign when the rule selector matches one or more elements.
[declarations](declarations.png)
[declarations2](declarations2.png)
[declarations3](declarations3.png)
Use units to define the size of the property.
[Units chart](unitschart.png)
Ways to describe a color.
[colorchart](colorchart.png)

## Fonts

font-family defines what fonts should be used. (four major font families: serif, sans-serif, fixed, symbol)

## CSS Animation

Add animation-name: with the keyframes name. Also add the animation-duration property: whith the amounts of seconds.

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)
- Basic Markdown and syntax. [Writing Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) before continuing.
- Refer to this [example](https://github.com/webprogramming260/startup-example/blob/main/README.md) for inspiration.
