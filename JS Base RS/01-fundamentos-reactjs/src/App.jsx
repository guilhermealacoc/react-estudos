import { Post } from "./Post";
import { Header } from "./components/Header";

import "./styles.css";

export function App() {
  return (
    <div>
      <Header />

      <Post
        author="Guilherme"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nisl justo, porta et lorem in, venenatis volutpat lorem. Morbi magna metus, pulvinar vitae consectetur eu, faucibus at elit. Nullam nec metus erat. Nullam ac consequat augue. Cras porttitor libero mi, quis elementum odio accumsan at. Donec venenatis dignissim convallis."
      />
      <Post
        author="Jones Joanestown"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nisl justo, porta et lorem in, venenatis volutpat lorem. Morbi magna metus, pulvinar vitae consectetur eu, faucibus at elit. Nullam nec metus erat. Nullam ac consequat augue. Cras porttitor libero mi, quis elementum odio accumsan at. Donec venenatis dignissim convallis."
      />
    </div>
  );
}
