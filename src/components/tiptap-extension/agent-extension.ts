import { Extension } from "@tiptap/react"

export const Agent = Extension.create({
  name: "agent",
  addCommands() {
    return {
      generate:
        (prompt: string) =>
        async ({ commands }) => {
          const aiText = `AI: ${prompt}`
          commands.insertContent(aiText)
          return true
        },
    }
  },
})

export default Agent
