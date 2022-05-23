import React from 'react';

const Blogs = () => {
    return (
        <div className='m-10'>
            <p className='text-4xl text-center py-10'>Questions and Answers</p>
            <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    1. How will we improve the performance of a React Application?
                </div>
                <div class="collapse-content">
                    <p>React is a JavaScript library for building user interfaces. React ships with several ways to minimize the number of costly DOM operations required to update the UI. For many applications, using React will lead to a fast user interface without doing much work to specifically optimize for performance. Nevertheless, there are several ways we can speed up our React application. <br /><br />
                        <b>To improve the performance of a React Application, we have to follow the following teqniques:</b>
                        <br />
                        <ol>
                            <li><b><small>1. Use React.Fragment to Avoid Adding Extra Nodes to the DOM</small></b></li>
                            <li><b><small>2. Use Production Build</small></b></li>
                            <li><b><small>3. Use React.Suspense and React.Lazy for Lazy Loading Components</small></b></li>
                            <li><b><small>4. Use React.memo for Component Memoization</small></b></li>
                            <li><b><small>5. Virtualize a Large List Using react-window</small></b></li>
                        </ol> <br />
                        The techniques outlined above are all great ways for us to take into practice optimizing performance for our application.
                    </p>
                </div>
            </div>
            <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    2. What are the different ways to manage a state in a React application?
                </div>
                <div class="collapse-content">
                    <p>
                        There are severel different ways to manage a state in a React application. The following I focused on only four way, how to manage React State.
                        <span className='font-bold'>The Four Kinds of React State are: </span> 
                        <br /><br />
                        <ol>
                            <li>1. Local state</li>
                            <li>2. Global state</li>
                            <li>3. Server state</li>
                            <li>4. URL state</li>
                        </ol>
                        <br />
                        Now I'm going to detail these four State:
                        <br />
                        <br />
                        <b>Local state</b> - Local state is most often managed in React using the useState hook.
                        <br />
                        Local state is data we manage in one or another component.
                        <br />
                        <br />
                        <b>Global state</b> - Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
                        <br />
                        <br />
                        <b>Server state</b> - Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.
                        <br /><br />
                        <b>URL state</b> - Data that exists on our URLs, including the pathname and query parameters.

                        URL state is often missing as a category of state, but it is an important one.
                        In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!
                    </p>
                </div>
            </div>
            <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    3. How does prototypical inheritance work?
                </div>
                <div class="collapse-content">
                    <p>In JavaScript, objects inherit properties from other objects — the prototypes. That's the idea of prototypal inheritance.

                        JavaScript looks for inherited properties in the prototype of the object, but also in the prototype of the prototype, and so on in the chain of prototypes.

                        While prototypal inheritance seems clumsy at first, when understanding it we could enjoy its simplicity and possibilities.</p>
                </div>
            </div>
            <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    4. What is a unit test? Why should write unit tests?
                </div>
                <div class="collapse-content">
                    <p> <b>UNIT TESTING</b> is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.</p><br />
                    <p> <b>Unit Testing</b> is important because software developers sometimes try saving time doing minimal unit testing. <br /><br />
                        <b>Here, are the key reasons to perform unit testing:</b>
                        <ol>
                            <li>1. Unit tests help to fix bugs early in the development cycle and save costs.</li>
                            <li>2. It helps the developers to understand the testing code base and enables them to make changes quickly</li>
                            <li>3. Good unit tests serve as project documentation</li>
                            <li>4. Unit tests help with code re-use. Migrate both wer code and wer tests to wer new project. Tweak the code until the tests run again.</li>
                        </ol>
                    </p>
                </div>
            </div>
            <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    5. Why should we not update the state directly?
                </div>
                <div class="collapse-content">
                    <p>
                        <b>We should never update the state directly because of the following reasons:</b>
                        <br />
                        <br />
                        <ol>
                            <li>1. If we update it directly, calling the setState() afterward may just replace the update we made.</li>
                            <li>2. When we directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.</li>
                            <li>3. we will lose control of the state across all components.</li>
                        </ol>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;