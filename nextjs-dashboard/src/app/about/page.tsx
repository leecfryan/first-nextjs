import Image from "next/image";

export default function AboutPage() {
  return (
    <div>
      <h1>AboutPage</h1>
      <div className="img-container relative w-[100%] h-[500px]">
        <Image src='/code_illustration.png' alt="Image" fill />
      </div>
    </div>
  );
}
