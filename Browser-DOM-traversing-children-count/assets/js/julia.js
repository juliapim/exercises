// # Counting children

// This is a template from an online site.
// Feel free to explore the files it contains, but this is absolutely not required to be able to complete this exercise.
// What you need is to create your own JavaScript file and make sure it is included in the `index.html` file.

// You can use Visual Code live server to run the project.

// ## 1.
// * Get the children of the element with id `wrapper` and print them to the console as a list.
const Wrapper = document.getElementById('wrapper');
const wrapChild = Wrapper.children;
console.log(wrapChild.length)



// * Iterate over them and print their children to the console, as well as how many they are.


for (var i = 0; i < wrapChild.length; i++) {
  let element = wrapChild[i];
//   console.log(element.children, element.children.length);
  console.log(element.children,element.childElementCount)
  
}

// const wrapper = document.querySelector('#wrapper');
// const children = wrapper.children;
// console.log(children);
// console.log(children.length);

// for (let i = 0; i<children.length; i++){
//     console.log(children[i].tagName)
// }

// Note: We do not want to do this operation recursively, we just do it for the children of wrapper and its children.

// Note: There are 2 ways to print the number of children - give them both a try.

// ## 2.

// * Next, we need to find which from the children of the element with id `wrapper` has the highest number of classes.

//     For example, if one element has 2 classes and another has 3 classes - the one with 3 classes has the highest number of classes.

//     Let's write a function that returns an object that contains the element with the most classes and the total number of classes.
const highestNumberOfClasses = (node)=>{
    let returnObject =  {elementWithTheMostClasses: node[0],
totalNumberOfClasses: node[0].classList.length};

for (var i = 0; i < node.length; i++) {
    let element = node[i];
  //   console.log(element.children, element.children.length);
    console.log(element.classList.length);
    
    if (element.classList.length[i] > highestNumberOfClasses){
        returnObject.totalNumberOfClasses = element.classList.length;
        returnObject.elementWithTheMostClasses = element;
    }
  }

return returnObject;
}

console.log(highestNumberOfClasses(wrapChild))