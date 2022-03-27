<header>
  <div class="content">
    <img class="content__icon" src="/oscar.png" alt="" />
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

  h1 {
    text-align: center;
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
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

  .content__icon {
    height: 70px;
  }
</style>
