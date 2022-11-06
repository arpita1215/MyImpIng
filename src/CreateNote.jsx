import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Note from "./Note";

const CreateNote =(props) =>{


    const [expand, setExpand]=useState(false);

    const [note, setNote] = useState({
        title:"",
        content:"",
    });

    const InputEvent =(event)=>{
        // const value= event.target.value;
        // const name= event.target.name;

        const {name,value} = event.target;
        setNote((prevData)=>{
            return{
                ...prevData,
                [name]: value,
            }
        })
        console.log(note);
    }


    const addEvent=()=>{
        note.title=note.title.trim();
        note.content=note.content.trim();
        if(note.title>"" || note.content>"")
        {
        props.passNote(note);
        setNote({
            title:"",
            content:"",
        });
        }

    }
    const expandIt=()=>{
        setExpand(true);

    }

    const btoNormal=()=>{
        setExpand(false);
    }



    return <>
    <div className="main_note" onDoubleClick={btoNormal}>
        <form>
           { expand?
            <input type="text" name="title" value={note.title} onChange={InputEvent} placeholder="Title" autoComplete="off"/>: null}
            <textarea rows="" columns="" name="content" value={note.content} onChange={InputEvent} placeholder="Write a note..." onClick={expandIt} > </textarea>
           { expand?
            <Button onClick={addEvent}>
                <AddIcon className="plus_sign"/>
            </Button>:null}
        </form>
    </div>
    </>
};

export default CreateNote;