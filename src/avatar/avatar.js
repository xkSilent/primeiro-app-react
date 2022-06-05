import "./avatar.css";

export default function Avatar() {
  return (
    <div class="text-center">
      <figure class="figure">
        <img
          src="https://img1.pnghut.com/t/4/6/15/AhCBpDUepa/computer-software-male-black-and-white-facial-hair-avatar.jpg"
          class="rounded-circle mx-auto"
          alt="..."
        />
        <figcaption class="figure-caption text-center">
          <h5>
            <strong>John Doe</strong>
          </h5>
          <p>
            Web designer <span class="badge bg-primary">PRO</span>
          </p>
        </figcaption>
      </figure>
    </div>
  );
}
