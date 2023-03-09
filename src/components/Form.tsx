import React from "react";
import { useState } from "react";
import {
  parseEncodedString,
  emptyState,
  ParsedString,
} from "../utils/parseString";
import { Button, Form as FormBS, ListGroup } from "react-bootstrap";

export const Form: React.FC = () => {
  const [encryptedMessage, setEncryptedMessage] = useState("");
  const [decryptedMessage, setDecryptedMessage] = useState<ParsedString>({
    first_name: "",
    last_name: "",
    id: "",
  });
  const [error, setError] = useState("");

  const handleDecrypt = () => {
    setDecryptedMessage(emptyState());
    try {
      const decrypted = parseEncodedString(encryptedMessage);
      setDecryptedMessage(decrypted);
      setError("");
    } catch (error) {
      if (error instanceof Error) setError(error.message);
    }
  };

  return (
    <div>
      <FormBS>
        <FormBS.Group controlId="encrypted">
          <FormBS.Label>Enter encrypted message:</FormBS.Label>
          <FormBS.Control
            type="text"
            value={encryptedMessage}
            onChange={(e) => setEncryptedMessage(e.target.value)}
          />
        </FormBS.Group>

        <Button variant="primary" onClick={handleDecrypt}>
          Decrypt
        </Button>
      </FormBS>

      {error && <div className="mt-3 alert alert-danger">{error}</div>}

      {decryptedMessage && (
        <div className="mt-3">
          <h3>Decrypted message:</h3>
          <ListGroup>
            <ListGroup.Item>
              <strong>First Name:</strong> {decryptedMessage.first_name}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Last Name:</strong> {decryptedMessage.last_name}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>ID:</strong> {decryptedMessage.id}
            </ListGroup.Item>
          </ListGroup>
        </div>
      )}
    </div>
  );
};
