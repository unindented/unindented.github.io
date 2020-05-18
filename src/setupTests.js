import "@testing-library/jest-dom/extend-expect";
import { createMockEnvironment as mockEnvironment } from "relay-test-utils";

jest.mock("./relay/environment", () => mockEnvironment());
