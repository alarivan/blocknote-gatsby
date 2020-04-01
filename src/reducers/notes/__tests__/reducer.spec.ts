import { notesReducer } from "../reducer"
import { emptyAction } from "../../actions"
import { setNotesAction, saveNoteAction, deleteNoteAction } from "../actions"
import { Map } from "immutable"

describe("notesReducer", () => {
  it("returns initials state", () => {
    const state = notesReducer(Map(), emptyAction())

    expect(state).toEqual(Map())
  })

  it("sets notes", () => {
    const notes = Map([["fake_id", { id: "fake_id", body: "body" }]])
    const action = setNotesAction(notes)
    const state = notesReducer(Map(), action)

    expect(state).toEqual(notes)
  })

  it("adds note", () => {
    const note = { id: "fake_id", body: "body" }
    const action = saveNoteAction(note)
    const state = notesReducer(Map(), action)

    expect(state).toEqual(Map([[note.id, note]]))
  })

  it("deletes note", () => {
    const note = { id: "fake_id", body: "body" }
    const action = deleteNoteAction(note.id)
    const state = notesReducer(Map([[note.id, note]]), action)

    expect(state).toEqual(Map())
  })
})
