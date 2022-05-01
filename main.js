const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');

//Form submit event
form.addEventListener('submit', addItem);

//Delete event
itemList.addEventListener('click', removeItem);

//Filter event
filter.addEventListener('keyup', filterItems);

//Add item
function addItem(e) {
    //Prevent actual submit
    e.preventDefault();
    //Get input value
const newItem = document.getElementById('item').value;

//Create new li element
const li =document.createElement('li');
li.className = 'list-group-item';
//Add text node with input value
li.appendChild(document.createTextNode(newItem));

//Create del button element
const deleteBtn = document.createElement('button');

//Add classes to del btn
deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

//Append text node
deleteBtn.appendChild(document.createTextNode('X'));

//Appending del btn to li elements
li.appendChild(deleteBtn);

//Append li to list
itemList.appendChild(li);  
}

//Remove item func

function removeItem(e) {
    if(e.target.classList.contains('delete')) {
        if(confirm('Are you sure?')) {
            e.target.parentElement.remove();
            //itemList.removeChild(li);
        }
    }
}

//FilterItems func
function filterItems(e) {
    //convert text to lowercase
    const text = e.target.value.toLowerCase();
    //Get list
    const items = itemList.getElementsByTagName('li');
    //Convert to an Array
    Array.from(items).forEach((item)=> {
        const itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}


