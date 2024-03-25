import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";
import { FaEllipsisV } from "react-icons/fa";
function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => 
  state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();
  return (
    <>
        <button className="cstbutton" type="button">Collapse All</button>
        <button type="button">View Progress</button>
        <select>
            <option selected>Publish All</option>
        </select>
        <button type="button">Module</button>
        <button type="button"><FaEllipsisV className="ms-2" /></button>
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <button onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
            Add
          </button>
          <button onClick={() => dispatch(updateModule(module))}>
            Update
          </button>
          <input value={module.name}
            onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
          />
          <textarea value={module.description}
            onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
          />
        </li>
        {moduleList
        .filter((module) => module.course === courseId)
        .map((module, index) => (
            <li key={index} className="list-group-item">
            <button
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>
            <button
              onClick={() => dispatch(deleteModule(module._id))}>
              Delete
            </button>
            <h3 className="modName">{module.name}</h3>
            <p className="modDesc">{module.description}</p>
          </li>
          // {modulesList.map((module) => (
          // <li
          //   className="list-group-item"
          //   onClick={() => setSelectedModule(module)}>
          //   <div>
          //     <FaEllipsisV className="me-2" />
          //     {module.name}
          //     <span className="float-end">
          //       <FaCheckCircle className="text-success" />
          //       <FaPlusCircle className="ms-2" />
          //       <FaEllipsisV className="ms-2" />
          //     </span>
          //   </div>
          //   {selectedModule._id === module._id && (
          //     <ul className="list-group">
          //       {module.lessons?.map((lesson) => (
          //         <li className="list-group-item">
          //           <FaEllipsisV className="me-2" />
          //           {lesson.name}
          //           <span className="float-end">
          //             <FaCheckCircle className="text-success" />
          //             <FaEllipsisV className="ms-2" />
          //           </span>
          //         </li>
          //       ))}
          //     </ul>
          //   )}
          // </li>
        ))}
      </ul>
    </>
  );
}
export default ModuleList;