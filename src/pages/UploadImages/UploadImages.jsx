import { Center, Stack } from "@mantine/core"
import { BlankPage } from "core/components"
import DropDoc from "components/Gallery/DropDoc"

const UploadImages = () => {
  return (
    <BlankPage
      backgroundColor="#F7F5F1"
    >
        <Center
          h="100vh"
          w="100%"
        >
            <Stack
              sx={{
                  width: "100%",
                  height: "100%",
              }}
            >
               <DropDoc isInPageUpload />
            </Stack>
        </Center>
    </BlankPage>
  )
}

export default UploadImages