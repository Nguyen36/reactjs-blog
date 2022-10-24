import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Blogpost from "../Module/blog";
function CreateFrom() {
    const navigate = useNavigate()
    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')
    const hanleSubmit = (e)=>{
        e.preventDefault()
        // axios.post('http://localhost:5000/create',{
        //     title: title,
        //     content: content
        // })
        Blogpost.push({
            id:Blogpost.length+1,
            title: title,
            content: content,
            comments: []
        })
        navigate('/')
    }
    return (
        <form method="POST" onSubmit={hanleSubmit}>
            <div className="form-group">
            <label for="floatingInput">Blog title</label>
            <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Title"
                name="title"
                required
                onChange={(e)=>setTitle(e.target.value)}
            />
            </div>
        
            <div className="form-group">
            <label for="content">Content</label>
            <textarea
                name="content"
                className="form-control"
                id="content"
                rows="20"
                required
                onChange={(e)=>setContent(e.target.value)}
            ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      );
}

export default CreateFrom;