import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function TextEditor({ state, handleChange }) {
    return (
        <Editor
            editorState={state}
            wrapperClassName="text-wrapper prose prose-sm"
            editorClassName="text-editor"
            toolbar={{
                options: [
                    "inline",
                    "fontSize",
                    "link",
                    "blockType",
                    "list",
                    "textAlign",
                    "history",
                ],
                inline: {
                    options: ["bold", "italic", "underline", "strikethrough"],
                },
                list: {
                    options: ["unordered", "ordered"],
                },
                blockType: {
                    inDropdown: false,
                    options: [
                        "Normal",
                        "H1",
                        "H2",
                        "H3",
                        "H4",
                        "H5",
                        "H6",
                        "Blockquote",
                    ],
                    dropdownClassName: "bg-black",
                },
                fontSize: {
                    options: [
                        8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72,
                        96,
                    ],
                    className: undefined,
                    component: undefined,
                    dropdownClassName: undefined,
                },
            }}
            onEditorStateChange={(editorState) => handleChange(editorState)}
        />
    );
}
