import {
  Box,
  Input,
  Button,
  Paper,
  Dialog,
  DialogContent,
  Link,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useState, FormEvent } from "react";
import { useShazarrProvider } from "../../Shazarr/Provider";
import styled from "@emotion/styled";
import { useConfigProvider } from "../Provider";

export default function ModalConfig() {
  const [showApiForm, setShowApiForm] = useState<boolean>();
  const { recordingStatus } = useShazarrProvider();
  const {
    config,
    formConfig,
    isDebugMode,
    actions: { setConfig, setIsDebugMode },
  } = useConfigProvider();

  if (!formConfig) return null;

  function saveConfig(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setConfig({
      ...config,
      lidarr_url: data.get("lidarr_url")?.toString() || "",
      lidarr_api_key: data.get("lidarr_api_key")?.toString() || "",
      lidarr_library_path: data.get("lidarr_library_path")?.toString() || "",
      tidarr_url: data.get("tidarr_url")?.toString() || "",
      custom_service_url: data.get("custom_service_url")?.toString() || "",
      custom_service_name: data.get("custom_service_name")?.toString() || "",
    });
    setShowApiForm(false);
  }

  return (
    <>
      <Dialog
        fullWidth
        maxWidth="xs"
        open={!!showApiForm}
        onClose={() => setShowApiForm(false)}
      >
        <DialogContent sx={{ padding: 2 }}>
          <Box component="form" onSubmit={(e) => saveConfig(e)}>
            {Object.entries(formConfig)?.map((field, index) => (
              <Box marginBottom={2} key={`form-field-${index}`}>
                <Paper sx={{ padding: "0.5rem" }}>
                  <Input
                    name={field[0]}
                    type={field[1].type}
                    sx={{ fontSize: "0.925rem" }}
                    defaultValue={field[1].value}
                    placeholder={field[1].placeholder}
                    fullWidth
                  />
                </Paper>
              </Box>
            ))}
            <Box sx={{ textAlign: "center", paddingBottom: "10px" }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isDebugMode}
                    onChange={(e) => setIsDebugMode(e.target.checked)}
                  />
                }
                label="Debug mode ?"
              />
            </Box>
            <Box sx={{ textAlign: "center", paddingBottom: "10px" }}>
              <Link
                href="https://github.com/cstaelen/shazarr-app"
                target="_blank"
                rel="noreferrer"
                fontSize={12}
              >
                Github page - {process.env.REACT_APP_CURRENT_VERSION}
              </Link>
            </Box>
            <Box>
              <Button fullWidth type="submit" variant="contained">
                Save configuration
              </Button>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
      <ButtonConfig>
        <Button
          onClick={() => setShowApiForm(!showApiForm)}
          disabled={recordingStatus !== "inactive"}
        >
          Services configuration
        </Button>
      </ButtonConfig>
    </>
  );
}

const ButtonConfig = styled.div`
  margin-bottom: 1rem;
`;