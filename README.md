1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: The main difference between these are getElementById can only get the elements using its ID, so it will only give us one element.
While The getElementsByClassName can get all the elements using the same class name, so It will give us a list.

On the other hand using querySelector we can get the first matched element, here we can use anything like id, class, tag name.
While querySelectorAll will give us all the existing element that match the class/id/tag name.
here we will also get a list.

2. How do you create and insert a new element into the DOM?

Ans:To create a new element in DOM we need to use createElement() function. after createing we need to use appendChild() function into the perticular section where we wants to add it.

3. What is Event Bubbling? And how does it work?

Ans: Event Bubbling is like a bubble going up. Its follow the hierarchy.
Its works child to parent. For example:
if we click a button inside a div, it will first runs the button, then runs the div and then runs the body. So the events move from child to parent elements.

4. What is Event Delegation in JavaScript? Why is it useful?

Ans: Event delegation is when we put the event on the parent, not on every child.It isvery helpful because we need to write less code, it works faster and also works for every added later new elements.

5. What is the difference between preventDefault() and stopPropagation() methods?

Ans: The main difference between preventDefault() and stopPropagation() methods are the preventDefault() only stops the defult actions while stopPropagation() stops the event going up or event bubbling.
