# 目录：起步
- 版本控制
    - 本地版本控制系统
    - 集中化的版本控制系统
    - 分布式版本控制系统
- Git基础

## 版本控制
版本控制是一种记录一个或若干文件内容变化，以便将来查阅特定版本修订情况的系统。

### 本地版本控制系统

最流行的本地版本管理系统叫做rcs，它的工作原理基本上就是保存并管理文件补丁（patch），记录着对应文件修订前后的内容变化。

缺点：

1. 不能让不同系统上的开发者协同工作。
2. 存在数据丢失的风险（磁盘故障，误删）。

![image](https://raw.githubusercontent.com/zenyu/my-note-image/master/Git/local.png)

### 集中化的版本控制系统

集中化的版本控制系统有一个单一的集中管理的服务器，保存所有文件的修订版本，而协同工作的人们都通过客户端连到这台服务器，取出最新的文件或者提交更新。

缺点：

1. 中央服务器的单点故障造成协同开发者不能取出文件或提交更新。
2. 存在数据丢失的风险。

![image](https://raw.githubusercontent.com/zenyu/my-note-image/master/Git/centralized.png)

### 分布式版本控制系统

分布式版本控制系统的客户端并不只提取最新版本的文件快照，而是把代码仓库完整地镜像下来。任何一处协同工作用的服务器发生故障，事后都可以用任何一个镜像出来的本地仓库恢复。因为每一次的提取操作，实际上都是一次对代码仓库的完整备份。

特点：
1. 速度
2. 简单的设计
3. 对非线性开发模式的强力支持（允许成千上万个并行开发的分支）
4. 完全分布式
5. 有能力高效管理类似 Linux 内核一样的超大规模项目（速度和数据量）

优势：可以指定和若干不同的远端代码仓库进行交互，籍此，可以根据需要设定不同的协作流程，比如层次模型式的工作流。

![image](https://raw.githubusercontent.com/zenyu/my-note-image/master/Git/distributed.png)


## Git基础

- **直接记录快照，而非差异比较**。每次提交更新，或在Git中保存项目状态时，它主要对当时的全部文件制作一个快照并保存这个快照的索引。为了高效，如果文件没有修改，Git不再重新存储该文件，而是只保留一个链接指向之前存储的文件。

![image](https://raw.githubusercontent.com/zenyu/my-note-image/master/Git/snapshots.png)


- **近乎所有操作都是本地执行**。因为本地存储了整个项目的镜像，所以显而易见。

- **时刻保持数据完整性**。在保存到Git之前，所有数据都要进行内容的校验和（checksum）计算，并将此结果作为数据的唯一标识和索引。

    Git 使用 SHA-1 算法计算数据的校验和，通过对文件的内容或目录的结构计算出一个 SHA-1 哈希值，作为指纹字符串。该字串由 40 个十六进制字符（0-9 及 a-f）组成，看起来就像是：

- **多数操作仅添加数据**。