// interface ListInterface {
//     id: number;
//     title: string;
//     completionDate: string;
//     description: string;
// }
// class toDoList {
//     private newlistURL: string = "http://localhost:3000/addedTasks";
//     private doneListUrl: string = "http://localhost:3000/doneTasks";
//     private warningElement: HTMLParagraphElement;
//     private newItemContainer: HTMLDivElement;
//     private doneItemsContainer: HTMLDivElement;
//     constructor(warningId: string, newItemContainer: string, doneItemsContainer: string) {
//         this.warningElement = document.getElementById(warningId) as HTMLParagraphElement;
//         this.newItemContainer = document.getElementById(newItemContainer) as HTMLDivElement;
//         this.doneItemsContainer = document.getElementById(doneItemsContainer) as HTMLDivElement;
//     }
//     public async addNewTask(): Promise<void> {
//         const titleInput = document.getElementById('title') as HTMLInputElement;
//         const dateInput = document.getElementById('completion-date') as HTMLInputElement;
//         const descriptionInput = document.getElementById('description') as HTMLInputElement;
//         const title = titleInput.value;
//         const duedate = dateInput.value;
//         const description = descriptionInput.value;
//         if (title && duedate && description) {
//             try {
//                 const newTask: ListInterface = {
//                     id: Date.now(),
//                     title: title,
//                     completionDate: duedate,
//                     description: description
//                 };
//                 const postResponse = await this.storeTasks(newTask);
//                 if (postResponse.ok) {
//                     const tasks = await this.fetchNewTask();
//                     this.renderTasks(tasks);
//                 } else {
//                     console.log("Data not sent.");
//                 }
//             } catch (error) {
//                 console.error('Error:', error);
//             }
//         } else {
//             this.warningElement.textContent = "Please fill out all fields.";
//         }
//     }
//     private async storeTasks(task: ListInterface): Promise<Response> {
//         return fetch(this.newlistURL, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(task)
//         });
//     }
//     private async fetchNewTask(): Promise<ListInterface[]> {
//         const response = await fetch(this.newlistURL);
//         if (!response.ok) {
//             throw new Error("Failed to fetch list");
//         }
//         return response.json();
//     }
//     private renderTasks(newaddedtask: ListInterface[]): void {
//         this.newItemContainer.innerHTML = '';
//         newaddedtask.forEach(task => {
//             const eachListElement = document.createElement('div');
//             eachListElement.className = 'to-do-list';
//             eachListElement.innerHTML = `
//                 <div class="checkbutton">
//                     <label>completed:
//                         <input type="radio" name="group1" value="taskcompleted">
//                     </label>
//                 </div>
//                 <div class="topanddetails">
//                     <div class="top">
//                         <h2>${task.title}</h2>
//                         <p>${task.completionDate}</p>
//                     </div>
//                     <div class="details">
//                         <p>${task.description}</p>
//                         <button class="updateTask" data-id="${task.id}">update</button>
//                     </div>
//                 </div>
//             `;
//             this.newItemContainer.appendChild(eachListElement);
//         });
//     }
// }
// const createdTask = new toDoList('warning', 'mylist', 'donetasks');
// document.getElementById('addNewTask')?.addEventListener('click', () => createdTask.addNewTask());
