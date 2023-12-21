import ManageDOM from "./ManageDOM";

class ToDoList {
    constructor(title, description, dueDate, priority, notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    }

    changePriority(newPriority) {
        this.priority = newPriority;
    }

    changeTitle(newTitle) {
        this.title = newTitle;
    }

    changeDescription(newDescription) {
        this.description = newDescription;
    }

    changeDueDate(newDueDate) {
        this.dueDate = newDueDate;
    }

    changeNotes(newNotes) {
        this.notes = newNotes;
    }

    getPriority() {
        return this.priority;
    }

    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.description;
    }

    getDueDate() {
        return this.dueDate;
    }

    getNotes() {
        return this.notes;
    }

    createNewList() {
        
    }
    
    
}