module.exports = [
  // {
  //   title: "Personal Website",
  //   blurb: [
  //     "React, Styled-Components.",
  //     "This website serves as a clearing house for my programming work and as a coding sandbox to try out different stuff. Each page was made with particular challenges in mind. Currently I am using the site to learn about styled-components, Context API, responsive design, animation, and to examine the pros and cons of different data architectures."
  //   ]
  // },
  {
    title: "Most Recent",
    blurb: [
      "React, Three.js, webGL",
      "Three.js is a suite of plugins that give you easier access the WebGL API in JavaScript. The article linked below inspired me to make my own reusable and as agnostic as possible interface for working with Three.js in React. The reason I am building this instead of using someone else’s library is that I want access to all of the Three.js content in its purest form. I also want to decouple the update tick function used to render the graphics from React’s lifecycle. Finally, I want to know exactly what is going on in my code and perhaps integrate this with something else later. This is teaching me a lot about how to work with vanilla JS that operates outside of the React lifecycle, using refs, and, the original goal, how to integrate webGL into React interfaces."
    ],
    webUrl: "https://bit.ly/2B728iR"
  },
  {
    title: "Previous",
    blurb: [
        "Styled-Components",
      "My previous focus was on learning styled-components. This website was built, in large part, as a way to experiment with both styled-components. Overall I am quite impressed with styled-components and feel I have a good foundation of how they work and how to implement them well. Just like vanilla CSS, styled components still require forethought and refactoring as you go, but overall it is a more flexible and maintainable solution. Not to mention it keeps your render return far cleaner."
    ],
    webUrl: "https://www.styled-components.com/"
  }
];
