import AllTasksView from "../Pages/AllTasksView";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchTasks} from '../Redux Store/TasksSlice';

function AllTasksContainer() {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch])

    return (
        <AllTasksView />
    )
}

export default AllTasksContainer;