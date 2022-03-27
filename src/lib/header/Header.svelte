<header>
  <div class="content">
    <img src="/oscar.png" alt="" />
    <a href="/"><h1>Oscars 2022</h1></a>
  </div>

  <div class="text">
    <p>
      This is a list of the movies nominated for best picture in the 2022
      Oscars.
    </p>
    <p>
      You can mark a movie as watched and click in the card to see more details.
    </p>
  </div>
</header>

<style>
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    gap: 1rem;
  }

  .content {
    display: flex;
    justify-content: center;
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
    text-align: center;
  }

  p {
    font-size: var(--font-size-1);
  }

  a {
    text-decoration: none;
  }
</style>
