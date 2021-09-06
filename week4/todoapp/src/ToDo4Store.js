import { v4 as uuidv4 } from "uuid";

const todos = [
    {id: uuidv4(), text: "Mow the grass.", isComplete: false},
    {id: uuidv4(), text: "Go to gym.", isComplete: false},
    {id: uuidv4(), text: "Walk the dog.", isComplete: false},
    {id: uuidv4(), text: "Put kids to bed.", isComplete: false}
];

export default todos;