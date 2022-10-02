import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function FormPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [rationId, setRationId] = useState<string>();
  const iframeRef = useRef(null);

  useEffect(() => {
    setupRationId()
  }, []);

  useEffect(() => {
    setTimeout(() => {
      console.log("rationId: ", rationId);
      //@ts-ignore
      iframeRef?.current?.contentWindow?.postMessage(
        { message: "getId", value: rationId },
        "*"
      );
    }, 500);
  }, [rationId]);

  useEffect(() => {
    setupRationId();
  }, [searchParams]);

  function setupRationId(){
    const rationIdentificator = searchParams.get("id");
    if (rationIdentificator !== null) {
      setRationId(rationIdentificator);
    } else {
      setRationId(undefined);
    }
  }

  return (
    <div>      
      {rationId && (
        <iframe
          ref={iframeRef}
          src={`https://localhost:44311/api/ration/GetAppVersionByRationIdElastic?id=${rationId}`}
          style={{ width: "100vw", height: "100vh" }}
          allowFullScreen
        ></iframe>
      )}
      {!rationId && (
        <iframe
          ref={iframeRef}
          src={`https://localhost:44311/api/ration/GetCurrentAppVersionFile`}
          style={{ width: "100vw", height: "100vh" }}
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}
