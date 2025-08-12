import { Center, Stack } from "@mantine/core"
import { BlankPage } from "core/components"
import DropDoc from "components/Gallery/DropDoc"
import { useEffect } from "react";
import { authSlice } from "store/Slices";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";

const UploadImages = () => {
  const { authorId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authSlice.actions.setUserData({
        username   : authorId ?? undefined,
    }));
  }, [authorId]);

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