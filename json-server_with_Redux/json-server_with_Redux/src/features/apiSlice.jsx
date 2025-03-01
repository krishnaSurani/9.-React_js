import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchApi = createAsyncThunk("fetchApi",async()=>{
    return await axios.get("http://localhost:5000/product")
    .then((data)=>{
        return data.data
    })
})

export const postApi =createAsyncThunk("postApi",async(obj)=>{
    return await axios.post("http://localhost:5000/product",obj)
    .then((data)=>{
        return data.data
    })
})

export const deleteApi =createAsyncThunk("deleteApi", async(id)=>{     
   await axios.delete(`http://localhost:5000/product/${id}`)
   return id
        
})


export const updateApi = createAsyncThunk("updateApi",async(obj)=>{
    const data= await axios.put(`http://localhost:5000/product/${obj.id}`,obj)
        return data.data
})

export const apiSlice=createSlice({
    name:"apiSlice",
    initialState:{
        data:[],
        loading:true
    },
    reducers:{
    },
    extraReducers:(builder=>{
        // fetch data
        builder.addCase(fetchApi.pending,(state,action)=>{
            state.loading=true
        }),
        builder.addCase(fetchApi.fulfilled,(state,action)=>{
            state.loading=false
            state.data =action.payload
        })

        // post data
        builder.addCase(postApi.fulfilled,(state,action)=>{
            state.loading=false
            state.data.push(action.payload)
        })

        // delete data
           builder.addCase(deleteApi.fulfilled, (state,action)=>{    
            state.data = state.data.filter((el) => el.id != action.payload );
           });

        //    update data
        builder.addCase(updateApi.pending,(state,action)=>{
            state.loading=true
        }),
        builder.addCase(updateApi.fulfilled,(state,action)=>{
            state.loading=false
                state.data=state.data.map((el,i)=>{                    
                    if(el.id == action.payload.id )
                    {
                        el.img=action.payload.img;
                        el.title=action.payload.title;
                        el.des=action.payload.des;
                        el.price=action.payload.price;
                    }
                    else{
                        el;
                    }
                })
        })
        
    })


})

export default apiSlice.reducer