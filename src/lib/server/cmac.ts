export const verifyCmac = async (
  hexData: string
): Promise<string | undefined> => {
  if (hexData.startsWith("CURSIVE")) {
    const lastTwoChars = hexData.slice(-2);
    const num = parseInt(lastTwoChars, 10);
    if (isNaN(num) || num < 1 || num > 50) return undefined;
    return hexData;
  }

  try {
    let response;
    let data;
    const maxRetries = 3;
    let retries = 0;

    const params = new URLSearchParams({ e: hexData });

    while (retries < maxRetries) {
      try {
        response = await fetch(
          `http://ec2-52-59-236-57.eu-central-1.compute.amazonaws.com:9091/api/validate?${params}`,
          {
            method: "GET",
            headers: {
              Authorization:
                "Bearer d6c1a2cb2a283a4dc8fe452448d10386c4e6d9336a487a8e589be1e58f598c01",
            },
          }
        );
        data = await response.json();
        break; // If successful, exit the loop
      } catch (error) {
        retries++;
        if (retries === maxRetries) {
          throw new Error(`Failed to fetch after ${maxRetries} attempts`);
        }
        // Wait for a short time before retrying
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    }

    console.log(data);

    if (data.valid === true) {
      return data.tag.uid.toString();
    }
  } catch (e) {
    console.error("Error in get arx route:", e);
  }

  return undefined;
};
