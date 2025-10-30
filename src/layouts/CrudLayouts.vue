<template>
  <el-container class="w-screen h-screen">
    <el-header class="bg-black"><slot name="header" /></el-header>
    <el-container>
      <el-aside class="min-w-200px max-w-300px bg-blue"
        ><slot name="aside"
      /></el-aside>
      <el-main class="bg-cyan"><slot name="main" /></el-main>
    </el-container>
  </el-container>
</template>
