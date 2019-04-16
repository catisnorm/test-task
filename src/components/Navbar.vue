<template>
  <nav>
    <div class="container">
      <div class="brand">Not awesome solution</div>
      <ul>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Dummies</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>
nav {
  padding: 20px 0;
  border-bottom: 1px solid #868686;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin-bottom: 30px;
}

.brand {
  display: inline;
  font-weight: 600;
}

ul {
  display: inline;
  list-style: none;
}

li {
  display: inline;
  padding: 5px 10px;
}
</style>
