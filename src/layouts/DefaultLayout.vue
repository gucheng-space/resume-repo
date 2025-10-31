<template>
  <el-container class="w-screen h-screen">
    <el-header><slot name="header" /></el-header>
    <el-container>
      <el-aside class="min-w-200px max-w-300px bg-gray/20"
        ><slot name="aside"
      /></el-aside>
      <el-main class="bg-gray/50"><slot name="main" /></el-main>
    </el-container>
  </el-container>
</template>
