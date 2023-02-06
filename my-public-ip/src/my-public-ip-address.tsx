import { Action, ActionPanel, Detail } from "@raycast/api";
import { publicIpv4 } from "public-ip";
import { usePromise } from "@raycast/utils/dist";

const MyPublicIpAddress = () => {
  const { isLoading, data: ipv4 } = usePromise(async () => {
    const v4 = await publicIpv4();
    return v4;
  });

  return (
    <Detail
      isLoading={isLoading}
      markdown={`You ipv4 address is ${ipv4}`}
      actions={
        <ActionPanel>
          <Action.CopyToClipboard
            content={ipv4 ?? "ipv4 address is not loaded yet"}
            shortcut={{ modifiers: ["cmd"], key: "enter" }}
          ></Action.CopyToClipboard>
        </ActionPanel>
      }
    ></Detail>
  );
};

export default MyPublicIpAddress;
