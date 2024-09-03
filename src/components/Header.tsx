import { IconButton } from "@mui/joy/";
import { useColorScheme } from "@mui/joy/styles";
import { Brightness4, Brightness7 } from "@mui/icons-material";

const Header = () => {
  const { mode, setMode } = useColorScheme();

  return (
    <>
      <IconButton onClick={() => setMode(mode === "light" ? "dark" : "light")}>
        {mode === "dark" ? <Brightness4 /> : <Brightness7 />}
      </IconButton>
    </>
  );
};

export default Header;
