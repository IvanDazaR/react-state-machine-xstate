import React from "react";
import { useMachine } from "@xstate/react";
import bookingMachine from "../../Machines/bookingMachine";
import { Nav } from "../../Components/Nav";
import { StepsLayout } from "../StepsLayout";

export const BaseLayout = () => {
    const [state, send] = useMachine(bookingMachine);
    
    return (
        <div className="flex items-center justify-center bg-cover h-screen  bg-[url('https://images.unsplash.com/photo-1464038008305-ee8def75f234?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80')]">
            <div className=' '>
                <Nav state={state} send={send}/>
                <StepsLayout state={state} send={send}/>
            </div>
        </div>
    );
}
